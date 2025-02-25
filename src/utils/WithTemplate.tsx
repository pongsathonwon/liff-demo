import React, { Children, ComponentType, PropsWithChildren } from "react";

export function withTemplate(Layout: ComponentType<PropsWithChildren>) {
  function WithLayout<T extends Record<string, unknown>>(
    Content: ComponentType<T>
  ) {
    return (props: T) => {
      return (
        <Layout>
          <Content {...props} />
        </Layout>
      );
    };
  }
  return WithLayout;
}

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
