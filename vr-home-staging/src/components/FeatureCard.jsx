export default function FeatureCard({ feature }) {
    return (
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "16px",
          padding: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          flex: 1,
          minWidth: "220px",
        }}
      >
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "10px",
            background: "#111827",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "18px",
            marginBottom: "12px",
          }}
        >
          {feature.icon}
        </div>
  
        <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>
          {feature.title}
        </h3>
  
        <p style={{ fontSize: "13px", color: "#6b7280", lineHeight: "1.5" }}>
          {feature.description}
        </p>
      </div>
    );
  }