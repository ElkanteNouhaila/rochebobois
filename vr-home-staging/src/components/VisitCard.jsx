import { MapPin } from "lucide-react";
import StatusBadge from "./StatusBadge";
import UserAvatars from "./UserAvatars";

export default function VisitCard({ visit, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: "16px",
        cursor: "pointer",
        transition: "box-shadow 0.15s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
      }}
      onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.10)"}
      onMouseLeave={e => e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)"}
    >
      {/* Thumbnail */}
      <div style={{ position: "relative", flexShrink: 0 }}>
        <img
          src={visit.image}
          alt={visit.client}
          style={{
            width: "80px",
            height: "64px",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "12px",
            background: "rgba(0,0,0,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
          </svg>
        </div>
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: "15px", color: "#111827" }}>
          {visit.client}, {visit.propertyType}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontSize: "13px",
            color: "#6b7280",
            margin: "3px 0",
          }}
        >
          <MapPin size={12} />
          {visit.address}
        </div>
        <div style={{ fontSize: "12px", color: "#9ca3af" }}>
          {visit.rooms.join(", ")}
        </div>
      </div>

      {/* Status + Assignees */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexShrink: 0 }}>
        <StatusBadge status={visit.status} />
        <UserAvatars assignees={visit.assignees} />
      </div>
    </div>
  );
}
