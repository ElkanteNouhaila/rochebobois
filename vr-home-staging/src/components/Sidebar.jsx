import { NavLink, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  BedDouble,
  Video,
  Users,
  Plus,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Virtual visits", icon: Home, to: "/virtual-visits" },
  { label: "Furniture Catalog", icon: BedDouble, to: "/catalog" },
  { label: "Virtual Meeting", icon: Video, to: "/meetings", badge: 3 },
  { label: "Team", icon: Users, to: "/team" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside
      style={{
        width: "220px",
        flexShrink: 0,
        background: "#d4dde8",
        display: "flex",
        flexDirection: "column",
        padding: "20px 12px",
        gap: "4px",
      }}
    >
      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "4px" }}>
        {navItems.map(({ label, icon: Icon, to, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "11px 14px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "#111827" : "#4b5563",
              background: isActive ? "#fff" : "transparent",
              boxShadow: isActive ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.15s",
            })}
          >
            {({ isActive }) => (
              <>
                <Icon size={18} color={isActive ? "#111827" : "#6b7280"} strokeWidth={isActive ? 2.2 : 1.8} />
                <span style={{ flex: 1 }}>{label}</span>
                {badge && (
                  <span
                    style={{
                      background: "#ef4444",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      borderRadius: "999px",
                      minWidth: "20px",
                      height: "20px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 5px",
                    }}
                  >
                    {badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div
        style={{
          margin: "8px 4px 0",
          padding: "16px",
          background: "rgba(255,255,255,0.65)",
          borderRadius: "14px",
        }}
      >
        <p style={{ fontSize: "12px", color: "#6b7280", margin: "0 0 14px", lineHeight: 1.5 }}>
          Creating or adding new virtual visits couldn't be easier
        </p>
        <button
          onClick={() => navigate("/create")}
          style={{
            width: "100%",
            background: "#111827",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "11px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
          }}
        >
          <Plus size={16} />
          New visit
        </button>
      </div>
    </aside>
  );
}
