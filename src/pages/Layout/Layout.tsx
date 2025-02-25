import "./style.css";
import { Link, Outlet } from "react-router";
import { usePath } from "../../hooks";

export function Layout() {
  return (
    <div className="layout">
      <header>
        <h1 className="title">บันทึกยอดใช้จ่าย</h1>
      </header>
      <Outlet />
      <footer className="footer">@copyright 2025</footer>
    </div>
  );
}
