import React, { useState } from "react";
import "./style.css";
import { TBalance } from "../../types";
import { BalanceItem } from "../../components";
import { getDateObject, getFormattedDate, withAuth } from "../../utils";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useLiff } from "../../context/useLiff";
import { useRtdb } from "../../context";

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

const sumBalance = (prev: number, cur: TBalance) =>
  cur.type === "spend" ? prev - cur.amount : prev + cur.amount;

export function Balance() {
  const { lst } = useRtdb();
  const sum = lst.reduce(sumBalance, 0);
  return (
    <section className="balance">
      <h2 className="balance-header">รายละเอียดการใช้จ่าย</h2>

      {lst.map((d) => (
        <BalanceItem {...d} key={d.id} />
      ))}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: ".5rem 1rem",
          fontSize: "1.5rem",
          fontWeight: 600,
        }}
      >
        <span>ยอด</span>
        <span>{sum.toFixed(2)} บาท</span>
      </div>
      <Link to={{ pathname: "balance" }} className="add">
        <FontAwesomeIcon icon={faPlus} size="2x" />
      </Link>
      <div style={{ marginTop: "6rem" }}></div>
    </section>
  );
}

export const BalanceWithAuth = withAuth(Balance);
