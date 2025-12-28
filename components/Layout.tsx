import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  hasJobs: boolean;
};

export default function Layout({ children, hasJobs }: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar hasJobs={hasJobs} />
      <main style={{ flex: 1, padding: "24px" }}>{children}</main>
    </div>
  );
}


