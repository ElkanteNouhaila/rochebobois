export default function StyleCard({ style, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect?.(style)}
      style={{
        border: selected ? "2px solid #111827" : "1px solid transparent",
        borderRadius: "16px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src={style.image}
        alt={style.name}
        style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "14px 16px" }}>
        <h3 style={{ margin: 0, fontSize: "15px", fontWeight: 600, color: "#111827" }}>{style.name}</h3>
        <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#6b7280", lineHeight: 1.5 }}>
          {style.description}
        </p>
      </div>
    </div>
  );
}
