import { useState } from "react";
import { Search } from "lucide-react";
import { catalogCategories } from "../data/mockData.js";
import CatalogCard, { AddCatalogCard } from "../components/CatalogCard.jsx";

export default function FurnitureCatalog() {
  const [query, setQuery] = useState("");

  const filtered = catalogCategories.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ flex: 1, position: "relative", maxWidth: "520px" }}>
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
            padding: "11px 28px",
            borderRadius: "12px",
            border: "none",
            background: "#111827",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            marginLeft: "auto",
          }}
        >
          Create
        </button>
      </div>

      <div className="catalog-grid">
        <AddCatalogCard />
        {filtered.map((category) => (
          <CatalogCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
