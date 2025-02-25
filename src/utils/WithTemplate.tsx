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
