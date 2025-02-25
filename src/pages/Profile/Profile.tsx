import React, { ChangeEvent, useCallback, useState } from "react";
import { Input } from "../../components";

export const sexes = ["male", "female", "na"] as const;

export type TFormValue = {
  firstname: string;
  lastname: string;
  dob: string;
  sex: (typeof sexes)[number];
};

const initValue: TFormValue = {
  firstname: "",
  lastname: "",
  dob: new Date().toISOString().split("T")[0],
  sex: "na",
};

export function Profile() {
  const [{ firstname, lastname, dob, sex }, setForm] = useState(initValue);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(`${e.target.name}:${e.target.value}`);
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };
  const validateFirstname = (value: string) => {
    if (value === "") return "firstname is required";
    return;
  };
  const validateLastname = (value: string) => {
    if (value === "") return "firstname is required";
    return;
  };
  const validateDob = (value: string) => {
    try {
      const date = new Date(value);
      if (date > new Date()) {
        return "invalid date";
      }
    } catch (err) {
      return "invalid date";
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("submit");
      }}
    >
      <Input
        id="fNAme"
        name="firstname"
        showLable="firstname"
        placeholder="enter your name"
        value={firstname}
        type="text"
        onChange={onChange}
        aria-label="firstname"
        errorMessage={validateFirstname(firstname)}
      />
      <Input
        id="lName"
        name="lastname"
        showLable="lastname"
        placeholder="enter your lastname"
        value={lastname}
        type="text"
        onChange={onChange}
        aria-label="lastname"
        errorMessage={validateLastname(lastname)}
      />
      <Input
        id="dob"
        name="dob"
        showLable="date of birth"
        value={dob}
        type="date"
        onChange={onChange}
        aria-label="date of birth"
        errorMessage={validateDob(dob)}
      />
      <button type="submit">submit</button>
    </form>
  );
}
