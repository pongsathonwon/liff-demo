import { PropsWithChildren } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faClock } from "@fortawesome/free-regular-svg-icons";
import { faEllipsis, faCalculator } from "@fortawesome/free-solid-svg-icons";
type IconProps = { label: string; icon: string } & PropsWithChildren;

const fontFaCoverter = (icon: string) => {
  switch (icon) {
    case "user":
      return faUser;
    case "clock":
      return faClock;
    case "calculator":
      return faCalculator;
    case "more":
      return faEllipsis;
    default:
      throw new Error("icon not support");
  }
};

export function Icon({ label, icon }: IconProps) {
  const faIcon = fontFaCoverter(icon);
  return (
    <div className="icon">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faIcon} size="4x" />
      </div>
      <h3>{label}</h3>
    </div>
  );
}

type Test = typeof Icon;
