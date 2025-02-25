import React, { InputHTMLAttributes, useState } from "react";
import "./style.css";

export type TInput = {
  showLable: string;
  errorMessage?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ errorMessage, id, name, showLable, ...props }: TInput) {
  const [touched, setTouched] = useState(false);
  return (
    <div className="formfield">
      <label className="label" htmlFor={id}>
        {showLable}
      </label>
      <input
        className="input"
        onBlur={() => setTouched(true)}
        {...{ id, name, ...props }}
      />
      {errorMessage && touched && <span>{errorMessage}</span>}
    </div>
  );
}
