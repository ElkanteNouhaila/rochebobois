import { Layers, MoreVertical } from "lucide-react";

export default function CatalogCard({ category }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        cursor: "pointer",
      }}
    >
      <div style={{ height: "140px", overflow: "hidden" }}>
        <img
          src={category.image}
          alt={category.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
      <div
        style={{
          padding: "12px 14px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#f3f4f6",
        }}
      >
        <div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: "#111827" }}>{category.name}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "12px",
              color: "#9ca3af",
              marginTop: "2px",
            }}
          >
            <Layers size={12} />
            {category.itemCount} items
          </div>
        </div>
        <button
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "2px",
            color: "#9ca3af",
            display: "flex",
          }}
        >
          <MoreVertical size={16} />
        </button>
      </div>
    </div>
  );
}

export function AddCatalogCard() {
  return (
    <div
      style={{
        background: "#dce4ed",
        borderRadius: "16px",
        height: "196px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "20%",
          right: "20%",
          height: "28px",
          background: "#c8d4e0",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <div
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#6b7280",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "28px",
          fontWeight: 300,
          lineHeight: 1,
          marginTop: "12px",
        }}
      >
        +
      </div>
    </div>
  );
}
