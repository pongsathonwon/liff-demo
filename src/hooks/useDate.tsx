import { useState } from "react";
import { TDate } from "../types";

const getDateObject = () => {
  const today = new Date();
  const dateArray = today.toISOString().split("T")[0].split("-");
  const [year, month, day] = dateArray.map(parseInt);
  return { day, month, year };
};

export function useDate() {
  const dateObject = getDateObject();
  const [date, setDate] = useState<TDate>(dateObject);
  const isoDate = `${date.year}-${date.month}-${date.day}`;
  return { date, setDate, isoDate };
}
