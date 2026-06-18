import PropertyForm from "../components/PropertyForm.jsx";
import StyleCard from "../components/StyleCard.jsx";
import { styles } from "../data/mockData.js";

export default function CreateProject() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: 0 }}>
          New Virtual Visit
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "6px" }}>
          Enter property details and choose a staging style.
        </p>
      </div>

      <PropertyForm />

      <div className="styles-grid">
        {styles.map((style) => (
          <StyleCard key={style.id} style={style} />
        ))}
      </div>
    </div>
  );
}
