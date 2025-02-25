import React, { useContext } from "react";

export function useCustomCtx<T>(
  context: React.Context<T | null>,
  hookName: string
): () => T {
  return () => {
    const ctx = useContext(context);
    if (!ctx)
      throw new Error(
        `use ${hookName} customHook must be used in ${hookName} provider`
      );
    return ctx;
  };
}
