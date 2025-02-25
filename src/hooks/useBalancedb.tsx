import { onValue, push, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { rtdb } from "../firebase";
import { TBalance } from "../types";
import { getFDOM } from "../utils";
import { getToday } from "../utils/date";

type TBalanceDto = Omit<TBalance, "id" | "date">;

export function useBalncedb(userId: string | null) {
  const currentCollection = getFDOM();
  const docRef = ref(rtdb, `balance/${userId}/${currentCollection}`);
  const [lst, setLst] = useState<TBalance[]>([]);
  const addBalance = async (body: TBalanceDto) => {
    const newDocRef = push(docRef);
    await set(newDocRef, { ...body, date: getToday() });
  };
  const editBalance = (newData: TBalance) => {
    const newList = lst.map((d) => (d.id === newData.id ? newData : d));
    set(docRef, newList);
  };

  const deleteBalance = (id: string) => {
    const newList = lst.filter((d) => d.id !== id);
    set(docRef, newList);
  };

  const readBalance = () =>
    onValue(docRef, (snapshot) => {
      if (!snapshot.exists()) {
        return;
      }
      const raw = snapshot.toJSON() as Record<string, Omit<TBalance, "id">>;
      if (!raw) return;
      const ids = Object.keys(raw);
      const data = ids.map((id) => ({ id, ...raw[id] }));
      setLst(data.map((d) => ({ ...d, amount: Number(d.amount) })));
    });

  useEffect(() => {
    console.log(userId);
  });
  useEffect(() => {
    if (!userId) return;
    const unsub = readBalance();
    return () => unsub();
  }, [userId]);

  return { lst, addBalance, editBalance, deleteBalance };
}
