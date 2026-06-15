import { useNavigate } from "react-router-dom";
import { stats, visits } from "../data/mockData.js";
import StatCard from "../components/StatCard.jsx";
import VisitCard from "../components/VisitCard.jsx";

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      {/* Welcome */}
      <div>
        <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#111827", margin: 0 }}>
          Welcome Back !
        </h1>
        <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "6px" }}>
          Let's make your customers' dream homes a reality, one 3D visualization at a time.
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {stats.map((s) => (
          <StatCard key={s.id} label={s.label} value={s.value} icon={s.icon} />
        ))}
      </div>

      {/* Latest visits */}
      <div>
        <h2 style={{ fontSize: "18px", fontWeight: 700, color: "#111827", marginBottom: "16px" }}>
          My latest Visits
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {visits.slice(0, 3).map((visit) => (
            <VisitCard
              key={visit.id}
              visit={visit}
              onClick={() => navigate(`/virtual-visits/${visit.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}