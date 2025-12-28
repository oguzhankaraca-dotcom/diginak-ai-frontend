const menu = [
    "Profile",
    "Set Up",
    "Dashboard",
    "Insights",
    "Shippers",
    "Brokers",
    "Carrier Dispatchers",
    "IFAs",
    "Carriers",
    "Archives",
  ];
  
  export default function Sidebar() {
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
  
        {menu.map((item) => (
          <div
            key={item}
            style={{
              padding: "8px 0",
              color: "#444",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </aside>
    );
  }
  
