import liff, { Liff } from "@line/liff";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useCustomCtx } from "../utils";

export type TLiffContext = {
  ready: boolean;
  error: string | null;
  userId: string | null;
  login: () => void;
  logout: () => void;
};

export type TNonNullLiff = {
  liffObject: Liff;
};

export const LiffContext = createContext<TLiffContext | null>(null);

export const useLiff = useCustomCtx(LiffContext, "liff");

export const LiffContextProvider = ({ children }: PropsWithChildren) => {
  const [ready, setReady] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [loginStatus, setLoginStatus] = useState<boolean>(false);
  const [userId, setUserId] = useState<string | null>(null);
  const init = async () => {
    await liff.init(
      { liffId: import.meta.env.VITE_LIFF_ID },
      () => {
        setReady(true);
      },
      (err) => {
        setError(err.message);
        setReady(false);
      }
    );
  };
  const login = async () => {
    if (liff.isLoggedIn()) {
      setLoginStatus(true);
      const { userId } = await liff.getProfile();
      setUserId(userId);
      return;
    }
    liff.login();
  };

  const logout = () => {
    if (!loginStatus) return;
    liff.logout();
    setLoginStatus(false);
  };
  // initialize
  useEffect(() => {
    init();
  }, []);
  // check login state
  useEffect(() => {
    if (!ready) return;
    login();
  }, [ready]);

  return (
    <LiffContext.Provider value={{ ready, error, userId, login, logout }}>
      {children}
    </LiffContext.Provider>
  );
};
