import { ChangeEvent, FormEvent, PropsWithChildren, useState } from "react";
import "./style.css";
import { Input } from "../Input/Input";
import SelectBox from "../SelcetBox/SelectBox";
import { TBalanceFormData } from "../../types";
import { Link } from "react-router";

const optionRef = [
  { label: "จ่ายบัตร", value: "spend" },
  { label: "โอนคืน", value: "pay" },
];

type TBalanceFormProps = {
  data: TBalanceFormData;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void | Promise<void>;
} & PropsWithChildren;

export function BalanceForm({
  data: { desc, type, amount },
  onChange,
  onSubmit,
}: TBalanceFormProps) {
  return (
    <form className="balance-form" onSubmit={onSubmit}>
      <Input
        showLable="คำอธิบาย"
        id="desc"
        name="desc"
        type="text"
        value={desc}
        onChange={onChange}
      />
      <Input
        showLable="จำนวนเงิน"
        type="number"
        step="1"
        min="0"
        id="amonut"
        name="amount"
        value={amount}
        onChange={onChange}
      />
      <SelectBox
        onChange={onChange}
        value={type}
        opts={optionRef}
        name="type"
        showLable="ประเภท"
        id="type"
      />
      <div className="balance-btn-wrapper">
        <Link to="/" className="back">
          กลับ
        </Link>
        <button type="submit" className="btn-submit">
          ยืนยัน
        </button>
      </div>
    </form>
  );
}
