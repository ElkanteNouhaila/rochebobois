import { Mail, Bell, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="navbar">
      <div style={{ display: "flex", alignItems: "baseline", gap: "1px" }}>
        <span style={{ fontWeight: 999, fontSize: "30px", color: "#111827", letterSpacing: "-0.5px" }}>
          roche
        </span>
        <span style={{ fontWeight: 400, fontSize: "30px", color: "#111827", letterSpacing: "-0.5px" }}>
          bobois
        </span>
        <span
          style={{
            fontSize: "9px",
            color: "#111827",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginLeft: "2px",
            alignSelf: "flex-end",
            paddingBottom: "3px",
          }}
        >
          PARIS
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "6px 8px 6px 12px",
        }}
      >
        <button
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.30)",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Mail size={16} color="gray" />
        </button>

        <div style={{ position: "relative" }}>
          <button
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.30)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Bell size={16} color="gray" />
          </button>
          <span
            style={{
              position: "absolute",
              top: "-2px",
              right: "-2px",
              background: "#ef4444",
              color: "#fff",
              fontSize: "10px",
              fontWeight: 700,
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </span>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingLeft: "4px",
            cursor: "pointer",
          }}
        >
          <img
            src="https://i.pravatar.cc/40?img=11"
            alt="Ali Hraich"
            style={{ width: "36px", height: "36px", borderRadius: "50%", objectFit: "cover" }}
          />
          <div style={{ textAlign: "left", lineHeight: 1.3 }}>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#111827" }}>Ali Hraich</div>
            <div style={{ fontSize: "11px", color: "gray" }}>Admin</div>
          </div>
          <ChevronDown size={16} color="#9ca3af" />
        </div>
      </div>
    </header>
  );
}
