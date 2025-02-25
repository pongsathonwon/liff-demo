import { ComponentType, useEffect } from "react";
import { useLiff } from "../useLiff";

export function withAuth<T extends Record<string, unknown>>(
  Comp: ComponentType<T>
) {
  const WithAuth = (props: T) => {
    const { login } = useLiff();
    useEffect(() => {
      login();
    }, []);
    return <Comp {...props} />;
  };
  return WithAuth;
}
