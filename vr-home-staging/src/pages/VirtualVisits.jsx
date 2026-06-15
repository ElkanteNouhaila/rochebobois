import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, Plus, MapPin } from "lucide-react";
import { visits } from "../data/mockData.js";
import StatusBadge from "../components/StatusBadge.jsx";
import UserAvatars from "../components/UserAvatars.jsx";

export default function VirtualVisits() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const filtered = visits.filter((v) =>
    `${v.client} ${v.address} ${v.propertyType}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const allSelected = filtered.length > 0 && filtered.every((v) => selected.includes(v.id));
  const toggleAll = () =>
    setSelected(allSelected ? [] : filtered.map((v) => v.id));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {/* Search */}
        <div
          style={{
            flex: 1,
            position: "relative",
            maxWidth: "480px",
          }}
        >
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
              width: "100%",
              padding: "10px 14px 10px 40px",
              borderRadius: "12px",
              border: "1.5px solid #e5e7eb",
              background: "#fff",
              fontSize: "14px",
              color: "#111827",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* Filter */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "12px",
            border: "1.5px solid #e5e7eb",
            background: "#fff",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            color: "#374151",
          }}
        >
          <SlidersHorizontal size={16} />
          Filter
        </button>

        {/* New visit */}
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
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

      {/* Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        {/* Table header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "48px 60px 1fr 160px 80px",
            padding: "12px 20px",
            borderBottom: "1px solid #f3f4f6",
            fontSize: "13px",
            fontWeight: 600,
            color: "#6b7280",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
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
        </div>

        {/* Rows */}
        {filtered.map((visit) => (
          <div
            key={visit.id}
            onClick={() => navigate(`/virtual-visits/${visit.id}`)}
            style={{
              display: "grid",
              gridTemplateColumns: "48px 60px 1fr 160px 80px",
              padding: "14px 20px",
              borderBottom: "1px solid #f9fafb",
              alignItems: "center",
              cursor: "pointer",
              transition: "background 0.1s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#f9fafb")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            {/* Checkbox */}
            <div onClick={(e) => { e.stopPropagation(); toggleSelect(visit.id); }}>
              <input
                type="checkbox"
                checked={selected.includes(visit.id)}
                onChange={() => {}}
                style={{ cursor: "pointer", width: "16px", height: "16px" }}
              />
            </div>

            {/* ID */}
            <div style={{ fontSize: "13px", color: "#6b7280" }}>{visit.id}</div>

            {/* Property */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div style={{ position: "relative", flexShrink: 0 }}>
                <img
                  src={visit.image}
                  alt={visit.client}
                  style={{ width: "72px", height: "56px", borderRadius: "10px", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "10px",
                    background: "rgba(0,0,0,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
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

            {/* Status */}
            <div>
              <StatusBadge status={visit.status} />
            </div>

            {/* Assignees */}
            <div>
              <UserAvatars assignees={visit.assignees} />
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div
            style={{
              padding: "48px",
              textAlign: "center",
              color: "#9ca3af",
              fontSize: "14px",
            }}
          >
            No visits found matching "{query}"
          </div>
        )}
      </div>
    </div>
  );
}