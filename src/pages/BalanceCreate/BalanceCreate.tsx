import { FormEvent, useState } from "react";
import { BalanceForm } from "../../components";
import { TBalanceFormData } from "../../types";
import { withTemplate } from "../../utils/WithTemplate";
import {
  CreateBalLayout,
  EditBalLayout,
} from "../Layout/BalanceLayout/BalanceLayout";
function BalanceData() {
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
    <BalanceForm
      data={data}
      onSubmit={onSubmit}
      onChange={(e) =>
        setData((d) => ({ ...d, [e.target.name]: e.target.value }))
      }
    />
  );
}

export const CreateBalance = withTemplate(CreateBalLayout)(BalanceData);
export const EditBalance = withTemplate(EditBalLayout)(BalanceData);
