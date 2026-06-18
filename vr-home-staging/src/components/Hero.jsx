import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        padding: "80px 40px",
        textAlign: "center",
        background: "linear-gradient(135deg, #111827, #1f2937)",
        color: "white",
        borderRadius: "20px",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "16px" }}>
        Design Homes in 3D. Impress Clients Instantly.
      </h1>

      <p style={{ fontSize: "16px", color: "#d1d5db", maxWidth: "600px", margin: "0 auto" }}>
        Create stunning virtual staging projects, choose premium styles, and
        share interactive previews with your clients in seconds.
      </p>

      <div style={{ marginTop: "24px", display: "flex", gap: "12px", justifyContent: "center" }}>
        <button
          onClick={() => navigate("/create-project")}
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "none",
            background: "white",
            color: "#111827",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Create Project
        </button>

        <button
          onClick={() => navigate("/project/1")}
          style={{
            padding: "12px 20px",
            borderRadius: "10px",
            border: "1px solid white",
            background: "transparent",
            color: "white",
            cursor: "pointer",
          }}
        >
          View Demo
        </button>
      </div>
    </div>
  );
}