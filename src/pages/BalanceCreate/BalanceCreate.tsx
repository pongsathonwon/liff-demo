import { ChangeEvent, FormEvent, useState } from "react";
import { BalanceForm } from "../../components";
import { TBalance, TBalanceFormData } from "../../types";
import { withTemplate } from "../../utils/WithTemplate";
import {
  CreateBalLayout,
  EditBalLayout,
} from "../Layout/BalanceLayout/BalanceLayout";
import { useLocation, useNavigate } from "react-router";
import { useRtdb } from "../../context";

const initialValue: TBalanceFormData = {
  desc: "",
  amount: 0,
  type: "spend",
};

const config = (state: TBalance | null | undefined): TBalanceFormData => {
  if (!state) {
    return initialValue;
  }
  return state as TBalanceFormData;
};

function useBalanceFormData(init?: TBalanceFormData) {
  if (!init) {
    init = initialValue;
  }
  const [data, setData] = useState<TBalanceFormData>(init);
  const navigate = useNavigate();
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setData((p) => ({ ...p, [e.target.name]: [e.target.value] }));
  const handleSubmit =
    (fn: () => Promise<void>) => async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        await fn();
      } catch (err) {
        console.log(err);
      } finally {
        navigate(-1);
      }
    };

  return { data, onChange, handleSubmit };
}

function BalanceCreate() {
  const { state } = useLocation();
  const { data, onChange, handleSubmit } = useBalanceFormData(state);
  const { addBalance } = useRtdb();
  const onSubmit = handleSubmit(async () => await addBalance(data));
  return <BalanceForm data={data} onSubmit={onSubmit} onChange={onChange} />;
}

function BalanceEdit() {
  const { state } = useLocation();
  const { data, onChange, handleSubmit } = useBalanceFormData(state);
  const { editBalance } = useRtdb();
  const onSubmit = handleSubmit(
    async () => await editBalance({ ...state, ...data })
  );
  return <BalanceForm data={data} onSubmit={onSubmit} onChange={onChange} />;
}

export const CreateBalance = withTemplate(CreateBalLayout)(BalanceCreate);
export const EditBalance = withTemplate(EditBalLayout)(BalanceEdit);
