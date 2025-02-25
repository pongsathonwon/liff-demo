import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { LiffContextProvider } from "./useLiff";
import {
  Balance,
  BalanceWithAuth,
  Home,
  Layout,
  Login,
  Profile,
} from "./pages";
import { BalanceForm } from "./components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LiffContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path="/" element={<Login />} />
            <Route path="/balance" element={<Balance />} /> */}
            <Route path="/" element={<Balance />} />
            <Route path="/balance" element={<BalanceForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LiffContextProvider>
  </StrictMode>
);
