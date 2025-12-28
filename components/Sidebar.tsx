import React from "react";
import { View } from "../types/view";

type Props = {
  hasJobs: boolean;
  activeView: View;
  setActiveView: (v: View) => void;
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

