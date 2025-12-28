type Props = {
  hasJobs: boolean;
  activeView: "chat" | "jobs";
  setActiveView: (v: "chat" | "jobs") => void;
};

export default function Sidebar({
  hasJobs,
  activeView,
  setActiveView,
}: Props) {
  return (
    <aside
      style={{
        width: 240,
        borderRight: "1px solid #eee",
        padding: 16,
        background: "#fafafa",
      }}
    >
      <button
        style={{ width: "100%", marginBottom: 16 }}
        onClick={() => setActiveView("chat")}
      >
        + New Chat
      </button>

      <div
        style={{
          padding: "8px 0",
          fontWeight: activeView === "chat" ? 600 : 400,
          cursor: "pointer",
        }}
        onClick={() => setActiveView("chat")}
      >
        Chat
      </div>

      {hasJobs && (
        <div
          style={{
            padding: "8px 0",
            fontWeight: activeView === "jobs" ? 600 : 400,
            cursor: "pointer",
          }}
          onClick={() => setActiveView("jobs")}
        >
          Jobs
        </div>
      )}
    </aside>
  );
}

