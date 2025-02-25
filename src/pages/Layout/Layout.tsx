import "./style.css";
import { Outlet } from "react-router";

export function Layout() {
  return (
    <div className="layout">
      {/* <header>
        <h1 className="title">บันทึกยอดใช้จ่าย</h1>
      </header> */}
      <Outlet />
      <footer className="footer">@copyright 2025</footer>
    </div>
  );
}
