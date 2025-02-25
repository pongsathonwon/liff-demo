import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { getFDOM, useCustomCtx } from "../utils";
import { rtdb } from "../firebase";
import { onValue, push, ref, set } from "firebase/database";
import { useLiff } from "./useLiff";
import { TBalance, TBalanceFormData } from "../types";
import { getToday } from "../utils/date";

type TRtdbContext = {
  lst: TBalance[];
  addBalance: (body: TBalanceFormData) => Promise<void>;
  editBalance: (newData: TBalance) => Promise<void>;
};

const RtdbContext = createContext<TRtdbContext | null>(null);

export const useRtdb = useCustomCtx(RtdbContext, "rtdb");

export function RtdbContextProvider({ children }: PropsWithChildren) {
  const { userId } = useLiff();
  const currentCollection = getFDOM();
  const basepath = `balance/${userId}`;
  const thisMonthpath = `${basepath}/${currentCollection}`;
  const [lst, setLst] = useState<TBalance[]>([]);
  const addBalance = async (body: TBalanceFormData) => {
    if (!userId) return;
    const docRef = ref(rtdb, thisMonthpath);
    const newDocRef = push(docRef);
    await set(newDocRef, { ...body, date: getToday() });
  };
  const editBalance = async (newData: TBalance) => {
    if (!userId) return;
    const docRef = ref(rtdb, `${thisMonthpath}/${newData.id}`);
    await set(docRef, newData);
  };

  const readBalance = () =>
    onValue(
      ref(rtdb, thisMonthpath),
      (snapshot) => {
        if (!snapshot.exists()) {
          return;
        }
        const raw = snapshot.toJSON() as Record<string, Omit<TBalance, "id">>;
        if (!raw) return;
        const ids = Object.keys(raw);
        const data = ids.map((id) => ({ id, ...raw[id] }));
        setLst(data.map((d) => ({ ...d, amount: Number(d.amount) })));
      },
      (err) => console.log(err)
    );

  useEffect(() => {
    console.log(userId);
  });
  useEffect(() => {
    if (!userId) return;
    const unsub = readBalance();
    return () => unsub();
  }, [userId]);
  return (
    <RtdbContext.Provider value={{ lst, addBalance, editBalance }}>
      {children}
    </RtdbContext.Provider>
  );
}
