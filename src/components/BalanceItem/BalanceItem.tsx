import React, { PropsWithChildren } from "react";
import "./balanceItem.css";
import { TBalance } from "../../types";
import { getDateObject } from "../../utils";
import { Link } from "react-router";

export function BalanceItem({
  date,
  id,
  desc,
  amount,
}: TBalance & PropsWithChildren) {
  const { day, month, year } = getDateObject(date);
  return (
    <div className="balance-item">
      <div className="row">
        <span>วันที่</span>
        <span>
          {day}/{month}/{year}
        </span>
      </div>
      <div className="row">
        <span>{desc}</span>
        <span>{amount.toFixed(2) + " "}บาท</span>
      </div>
      <div className="row">
        <Link
          className="edit"
          state={{ id, date, desc, amount }}
          to={{ pathname: `balance/${id}` }}
        >
          แก้ไข
        </Link>
      </div>
    </div>
  );
}
