import StatusBadge from "./StatusBadge";

export default function ProjectPreview({ project }) {
  if (!project) return null;

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src={project.image}
        alt={project.name}
        style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
      />

      <div style={{ padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#111827", margin: 0 }}>{project.name}</h2>
          <StatusBadge status={project.status} />
        </div>

        <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "14px", color: "#6b7280" }}>
          <p style={{ margin: 0 }}><strong style={{ color: "#111827" }}>Client:</strong> {project.client}</p>
          <p style={{ margin: 0 }}><strong style={{ color: "#111827" }}>Style:</strong> {project.style}</p>
          <p style={{ margin: 0 }}><strong style={{ color: "#111827" }}>Rooms:</strong> {project.rooms}</p>
        </div>

        <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              background: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Share Project
          </button>
          <button
            style={{
              padding: "10px 20px",
              borderRadius: "10px",
              border: "none",
              background: "#111827",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Launch Virtual Visit
          </button>
        </div>
      </div>
    </div>
  );
}
