const statusConfig = {
  "Not Started": {
    dot: "#9ca3af",
    bg: "#f3f4f6",
    text: "#6b7280",
  },
  Pending: {
    dot: "#f97316",
    bg: "#fff7ed",
    text: "#ea580c",
  },
  Completed: {
    dot: "#22c55e",
    bg: "#f0fdf4",
    text: "#16a34a",
  },
  Scanning: {
    dot: "#3b82f6",
    bg: "#eff6ff",
    text: "#2563eb",
  },
  Approved: {
    dot: "#22c55e",
    bg: "#f0fdf4",
    text: "#16a34a",
  },
};

export default function StatusBadge({ status }) {
  const config = statusConfig[status] || statusConfig["Not Started"];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: "4px 12px",
        borderRadius: "999px",
        backgroundColor: config.bg,
        color: config.text,
        fontSize: "13px",
        fontWeight: 500,
        whiteSpace: "nowrap",
      }}
    >
      <span
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: config.dot,
          flexShrink: 0,
        }}
      />
      {status}
    </span>
  );
}
