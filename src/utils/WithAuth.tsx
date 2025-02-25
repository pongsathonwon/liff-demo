import { ComponentType, useEffect } from "react";
import { useLiff } from "../context/useLiff";

export function withAuth<T extends Record<string, unknown>>(
  Comp: ComponentType<T>
) {
  return (props: T) => {
    const { login } = useLiff();
    useEffect(() => {
      login();
    }, []);
    return <Comp {...props} />;
  };
}
