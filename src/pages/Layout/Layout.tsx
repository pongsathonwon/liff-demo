import "./style.css";
import { Link, Outlet } from "react-router";
import { usePath } from "../../hooks";

export function Layout() {
  const { pathname, getNextPath } = usePath();
  return (
    <div className="layout">
      <header>
        <h1 className="title">This is LIFF Demo</h1>
      </header>
      <Outlet />
      {pathname === "/home" ? <></> : <Link to="/home">Back</Link>}
      <footer className="footer">@copyright 2025</footer>
    </div>
  );
}
