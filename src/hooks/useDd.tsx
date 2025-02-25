import { onValue, ref, set } from "firebase/database";
import React, { useEffect, useState } from "react";
import { rtdb } from "../firebase";
import { TBalance } from "../types";

type TBalanceDto = {
  userId: string;
} & Omit<TBalance, "id">;

function useDd(userId: string) {
  const docRef = ref(rtdb, `balance/${userId}/`);
  const [lst, setLst] = useState<TBalance[]>([]);
  const addBalance = ({ userId, date, ...body }: TBalanceDto) => {
    set(docRef, { ...body });
  };

  const readBalance = () =>
    onValue(docRef, (snapshot) => {
      const raw = snapshot.val();
    });

  useEffect(() => {
    const unsub = readBalance();
    return () => unsub();
  }, [userId]);

  return <div>useDd</div>;
}

export default useDd;
