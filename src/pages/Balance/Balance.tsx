import React, { useState } from "react";
import "./style.css";
import { TBalance } from "../../types";
import { BalanceItem } from "../../components";
import { getDateObject, getFormattedDate, withAuth } from "../../utils";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const mockBalance: TBalance[] = [
  { id: 1, desc: "plantnery", amount: 499, date: "2024-01-12", type: "spend" },
  { id: 2, desc: "top", amount: 1499, date: "2024-01-15", type: "spend" },
  {
    id: 3,
    desc: "scb mobile banking",
    amount: 2000,
    date: "2024-01-15",
    type: "pay",
  },
  { id: 4, desc: "plantnery", amount: 499, date: "2024-01-12", type: "spend" },
  { id: 5, desc: "top", amount: 1499, date: "2024-01-15", type: "spend" },
  {
    id: 6,
    desc: "scb mobile banking",
    amount: 2000,
    date: "2024-01-15",
    type: "pay",
  },
  { id: 7, desc: "plantnery", amount: 499, date: "2024-01-12", type: "spend" },
  { id: 8, desc: "top", amount: 1499, date: "2024-01-15", type: "spend" },
  {
    id: 9,
    desc: "scb mobile banking",
    amount: 2000,
    date: "2024-01-15",
    type: "pay",
  },
];

const getNetAmount = ({ type, amount }: TBalance) =>
  type === "spend" ? -amount : amount;

const sumBalance = (prev: TBalance, cur: TBalance) => ({
  ...prev,
  amount: prev.amount + getNetAmount(cur),
});

const defaultBalance: TBalance = {
  id: "none",
  desc: "ยอดรวม",
  amount: 0,
  type: "sum",
  date: getFormattedDate(getDateObject()),
};

export function Balance() {
  const [bal, setBal] = useState<TBalance[]>(mockBalance);
  const sum = bal.reduce(sumBalance, defaultBalance);
  return (
    <section className="balance">
      <h2 className="balance-header">รายละเอียดการใช้จ่าย</h2>

      {mockBalance.map((d) => (
        <BalanceItem {...d} key={d.id} />
      ))}
      <BalanceItem {...sum} />
      <Link to={{ pathname: "balance" }} className="add">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </Link>
      <div style={{ marginTop: "6rem" }}></div>
    </section>
  );
}

export const BalanceWithAuth = withAuth(Balance);
