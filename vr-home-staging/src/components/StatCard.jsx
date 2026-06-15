import { CheckCircle, Layers, Calendar, ExternalLink } from "lucide-react";

const iconMap = {
  "check-circle": CheckCircle,
  layers: Layers,
  sofa: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
      <path d="M4 18v2" />
      <path d="M20 18v2" />
      <path d="M12 4v9" />
    </svg>
  ),
  calendar: Calendar,
};

export default function StatCard({ label, value, icon }) {
  const Icon = iconMap[icon] || Layers;
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        flex: "1",
        minWidth: "180px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        position: "relative",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{ fontSize: "14px", color: "#6b7280", fontWeight: 500 }}>{label}</span>
        <ExternalLink size={16} color="#9ca3af" style={{ cursor: "pointer" }} />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <div
          style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "#f3f4f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#374151",
          }}
        >
          <Icon size={20} />
        </div>
        <span style={{ fontSize: "36px", fontWeight: 700, color: "#111827", lineHeight: 1 }}>
          {value}
        </span>
      </div>
    </div>
  );
}
