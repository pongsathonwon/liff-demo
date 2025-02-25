import React, { FormEvent, useState } from "react";
import "./style.css";
import { TBalanceFormData } from "../../types";
import { BalanceForm } from "../../components";
export function BalanceEdit() {
  const [data, setData] = useState<TBalanceFormData>({
    desc: "",
    amount: 0,
    type: "spend",
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <section className="balance">
      <h2 className="balance-header">แก้ไขการใช้จ่าย</h2>
      <BalanceForm
        data={data}
        onSubmit={onSubmit}
        onChange={(e) =>
          setData((d) => ({ ...d, [e.target.name]: e.target.value }))
        }
      />
    </section>
  );
}
