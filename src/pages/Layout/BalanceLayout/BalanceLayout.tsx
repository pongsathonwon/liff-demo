import React, { PropsWithChildren } from "react";
import { partialApply } from "../../../utils";

type TBalanceLayoutProps = { subheader: string } & PropsWithChildren;

export function BalanceLayout({ subheader, children }: TBalanceLayoutProps) {
  return (
    <section className="balance">
      <h2 className="balance-header">{subheader}</h2>
      {children}
    </section>
  );
}

const partialLayout = partialApply(BalanceLayout);

export const CreateBalLayout = partialLayout({
  subheader: "บันทึกการใช้จ่าย",
});

export const EditBalLayout = partialLayout({ subheader: "แก้ไขการใช้จ่าย" });
