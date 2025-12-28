import React from "react";

type Props = {
  hasJobs: boolean;
  activeView: string;
  setActiveView: (v: string) => void;
};

export default function Sidebar({
  hasJobs,
  activeView,
  setActiveView,
}: Props) {
  return (
    <aside
      style={{
        width: 220,
        borderRight: "1px solid #ddd",
        padding: 16,
      }}
    >
      <div
        style={{ marginBottom: 12, cursor: "pointer" }}
        onClick={() => setActiveView("chat")}
      >
        Chat
      </div>

      {hasJobs && (
        <div
          style={{ marginBottom: 12, cursor: "pointer" }}
          onClick={() => setActiveView("jobs")}
        >
          Jobs
        </div>
      )}
    </aside>
  );
}

