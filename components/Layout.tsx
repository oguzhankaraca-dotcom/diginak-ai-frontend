import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  children: React.ReactNode;
  hasJobs: boolean;
  activeView: "chat" | "jobs";
  setActiveView: (v: "chat" | "jobs") => void;
};

export default function Layout({
  children,
  hasJobs,
  activeView,
  setActiveView,
}: Props) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar
        hasJobs={hasJobs}
        activeView={activeView}
        setActiveView={setActiveView}
      />
      <main style={{ flex: 1, padding: "24px" }}>
        {activeView === "chat" && children}
        {activeView === "jobs" && (
          <div style={{ padding: 40 }}>
            <h2>Jobs</h2>
            <p>No jobs yet.</p>
          </div>
        )}
      </main>
    </div>
  );
}


