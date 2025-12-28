export default function Home() {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "black",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
            Diginak.ai
          </h1>
          <p style={{ fontSize: "18px", opacity: 0.7 }}>
            Job-state driven freight workflow engine
          </p>
        </div>
      </main>
    );
  }
  