import React, { SelectHTMLAttributes } from "react";
import "./style.css";
type TOption<T extends string | number> = { label: string; value: T };
type TSelectProps<T extends string | number> = {
  id: string;
  name: string;
  showLable: string;
  opts: TOption<T>[];
} & SelectHTMLAttributes<HTMLSelectElement>;
function SelectBox<T extends string | number>({
  id,
  showLable,
  name,
  opts,
  ...props
}: TSelectProps<T>) {
  return (
    <div className="formfield">
      <label className="label" htmlFor={id}>
        {showLable}
      </label>
      <select {...props} id={id} name={name} className="input">
        {opts.map(({ label, value }, idx) => (
          <option className="option" value={value} key={idx}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectBox;
