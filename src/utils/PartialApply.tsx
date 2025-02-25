import React, { ComponentType, PropsWithChildren } from "react";

export function partialApply<T extends {}>(
  Comp: ComponentType<T & PropsWithChildren>
) {
  function CompWithoutChildren(partialProps: T) {
    return ({ children }: PropsWithChildren) => (
      <Comp {...partialProps}>{children}</Comp>
    );
  }

  return CompWithoutChildren;
}
