import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Plus, MapPin, MoreVertical } from "lucide-react";
import { visits } from "../data/mockData.js";
import StatusBadge from "../components/StatusBadge.jsx";
import UserAvatars from "../components/UserAvatars.jsx";

export default function VirtualVisits() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const filtered = visits.filter((v) =>
    `${v.client} ${v.address} ${v.propertyType}`.toLowerCase().includes(query.toLowerCase())
  );

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const allSelected = filtered.length > 0 && filtered.every((v) => selected.includes(v.id));
  const toggleAll = () => setSelected(allSelected ? [] : filtered.map((v) => v.id));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ flex: 1, position: "relative", maxWidth: "480px" }}>
          <Search
            size={16}
            color="#9ca3af"
            style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }}
          />
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              width: "70%",
              padding: "11px 14px 11px 40px",
              borderRadius: "12px",
              border: "none",
              background: "#fff",
              fontSize: "14px",
              color: "#111827",
              outline: "none",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
            }}
          />
        </div>

        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            padding: "11px 18px",
            borderRadius: "12px",
            border: "none",
            background: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            color: "#374151",
            boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
          }}
        >
          <SlidersHorizontal size={16} />
          Filter
        </button>

        <button
          onClick={() => navigate("/create")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "11px 18px",
            borderRadius: "12px",
            border: "none",
            background: "#111827",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          <Plus size={16} />
          New visit
        </button>
      </div>

      <div
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "40px 56px 1fr 140px 90px 32px",
            padding: "14px 20px",
            borderBottom: "1px solid #f3f4f6",
            fontSize: "13px",
            fontWeight: 600,
            color: "#6b7280",
            alignItems: "center",
          }}
        >
          <div>
            <input
              type="checkbox"
              checked={allSelected}
              onChange={toggleAll}
              style={{ cursor: "pointer", width: "16px", height: "16px" }}
            />
          </div>
          <div>ID</div>
          <div>Property</div>
          <div>Status</div>
          <div>Assigned</div>
          <div />
        </div>

        {filtered.map((visit) => (
          <div
            key={visit.id}
            onClick={() => navigate(`/virtual-visits/${visit.id}`)}
            style={{
              display: "grid",
              gridTemplateColumns: "40px 56px 1fr 140px 90px 32px",
              padding: "16px 20px",
              borderBottom: "1px solid #f9fafb",
              alignItems: "center",
              cursor: "pointer",
              transition: "background 0.1s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.35)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
          >
            <div onClick={(e) => { e.stopPropagation(); toggleSelect(visit.id); }}>
              <input
                type="checkbox"
                checked={selected.includes(visit.id)}
                onChange={() => {}}
                style={{ cursor: "pointer", width: "16px", height: "16px" }}
              />
            </div>

            <div style={{ fontSize: "13px", color: "#6b7280" }}>{visit.id}</div>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <img
                  src={visit.image}
                  alt={visit.client}
                  style={{ width: "80px", height: "64px", borderRadius: "10px", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "10px",
                    background: "rgba(0,0,0,0.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.9)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2">
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#111827" }}>
                  {visit.client}, {visit.propertyType}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "12px",
                    color: "#6b7280",
                    margin: "3px 0",
                  }}
                >
                  <MapPin size={11} />
                  {visit.address}
                </div>
                <div style={{ fontSize: "11px", color: "#9ca3af" }}>
                  {visit.rooms.join(", ")}
                </div>
              </div>
            </div>

            <div>
              <StatusBadge status={visit.status} />
            </div>

            <div>
              <UserAvatars assignees={visit.assignees} />
            </div>

            <button
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "4px",
                display: "flex",
                color: "#9ca3af",
              }}
            >
              <MoreVertical size={18} />
            </button>
          </div>
        ))}

        {filtered.length === 0 && (
          <div style={{ padding: "48px", textAlign: "center", color: "#9ca3af", fontSize: "14px" }}>
            No visits found matching "{query}"
          </div>
        )}
      </div>
    </div>
  );
}
