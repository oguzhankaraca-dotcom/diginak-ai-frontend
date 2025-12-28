// components/TopBar.tsx
import React from "react";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="brand">
        <span className="dot" />
        <span>diginak.ai</span>
        <span className="badge">US market prototype</span>
      </div>

      <div className="actions">
        <button className="iconBtn" aria-label="More">
          ⋯
        </button>
      </div>
    </div>
  );
}
