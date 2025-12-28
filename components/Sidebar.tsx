type Props = {
  hasJobs: boolean;
};

export default function Sidebar({ hasJobs }: Props) {
  return (
    <aside
      style={{
        width: 240,
        borderRight: "1px solid #eee",
        padding: 16,
        background: "#fafafa",
      }}
    >
      <button style={{ width: "100%", marginBottom: 16 }}>
        + New Chat
      </button>

      <div style={{ padding: "8px 0" }}>Profile</div>
      <div style={{ padding: "8px 0" }}>Set Up</div>

      {hasJobs && (
        <div style={{ padding: "8px 0", fontWeight: 600 }}>
          Jobs
        </div>
      )}
    </aside>
  );
}

