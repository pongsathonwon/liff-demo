import React from "react";
import "./style.css";
import { useLiff } from "../../context/useLiff";
export function Login() {
  const { login } = useLiff();
  return (
    <div className="login">
      <button className="login-btn" onClick={login}>
        login
      </button>
    </div>
  );
}
