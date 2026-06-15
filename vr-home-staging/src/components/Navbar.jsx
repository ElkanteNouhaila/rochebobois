import { Mail, Bell } from "lucide-react";

export default function Navbar() {
  return (
    <header
      style={{
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 32px",
        background: "transparent",
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "1px" }}>
        <span style={{ fontWeight: 900, fontSize: "22px", color: "#111827", letterSpacing: "-0.5px" }}>
          roche
        </span>
        <span style={{ fontWeight: 400, fontSize: "22px", color: "#111827", letterSpacing: "-0.5px" }}>
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

      {/* Right icons */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#fff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
          }}
        >
          <Mail size={18} color="#374151" />
        </button>
        <div style={{ position: "relative" }}>
          <button
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "#fff",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
          >
            <Bell size={18} color="#374151" />
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
              border: "2px solid #e8ecf4",
            }}
          >
            1
          </span>
        </div>
        <img
          src="https://i.pravatar.cc/40?img=11"
          alt="Profile"
          style={{ width: "40px", height: "40px", borderRadius: "50%", objectFit: "cover", cursor: "pointer" }}
        />
      </div>
    </header>
  );
}
