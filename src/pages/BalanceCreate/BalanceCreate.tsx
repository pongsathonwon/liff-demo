import { FormEvent, useState } from "react";
import { BalanceForm } from "../../components";
import { TBalanceFormData } from "../../types";
import { withTemplate } from "../../utils/WithTemplate";
import {
  CreateBalLayout,
  EditBalLayout,
} from "../Layout/BalanceLayout/BalanceLayout";
import { useBalncedb } from "../../hooks";
import { useLiff } from "../../useLiff";
import { useLocation, useNavigate } from "react-router";
function BalanceData() {
  const { state } = useLocation();
  const init =
    state ??
    ({
      desc: "",
      amount: 0,
      type: "spend",
    } as TBalanceFormData);
  const [data, setData] = useState<TBalanceFormData>(init);
  const { userId } = useLiff();
  const { addBalance } = useBalncedb(userId);
  const navigate = useNavigate();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addBalance({ ...data, amount: Number(data.amount) });
    } catch (err) {
      console.log(err);
    } finally {
      navigate("/");
    }
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
