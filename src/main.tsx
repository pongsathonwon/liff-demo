import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { LiffContextProvider } from "./useLiff";
import {
  Balance,
  BalanceEdit,
  CreateBalance,
  EditBalance,
  Layout,
} from "./pages";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LiffContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Balance />} />
            <Route path="/balance" element={<CreateBalance />} />
            <Route path="/balance/:id" element={<EditBalance />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LiffContextProvider>
  </StrictMode>
);
