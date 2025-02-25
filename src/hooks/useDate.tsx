import { useState } from "react";
import { TDate } from "../types";
import { getDateObject } from "../utils";

export function useDate() {
  const dateObject = getDateObject();
  const [date, setDate] = useState<TDate>(dateObject);
  return { date, setDate };
}
