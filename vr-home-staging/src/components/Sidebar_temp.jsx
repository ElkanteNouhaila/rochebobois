import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Eye,
  Armchair,
  Video,
  Users,
  Plus,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/" },
  { label: "Virtual visits", icon: Eye, to: "/virtual-visits" },
  { label: "Furniture Catalog", icon: Armchair, to: "/catalog" },
  { label: "Virtual Meeting", icon: Video, to: "/meetings", badge: 3 },
  { label: "Team", icon: Users, to: "/team" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <nav style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>
        {navItems.map(({ label, icon: Icon, to, badge }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            style={({ isActive }) => ({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "10px 16px",
              borderRadius: "12px",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: isActive ? 600 : 400,
              color: isActive ? "#111827" : "#6b7280",
              background: isActive ? "#fff" : "transparent",
              boxShadow: isActive ? "0 1px 4px rgba(0,0,0,0.08)" : "none",
              transition: "all 0.15s",
              position: "relative",
            })}
          >
            {({ isActive }) => (
              <>
                <Icon size={18} color={isActive ? "#111827" : "#9ca3af"} />
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

      {/* Bottom hint + button */}
      <div
        style={{
          margin: "0 8px",
          padding: "14px",
          background: "#fff",
          borderRadius: "14px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
          marginTop: "auto"
        }}
      >
        <p style={{ fontSize: "12px", color: "#6b7280", marginBottom: "12px", lineHeight: 1.5 }}>
          Creating or adding new virtual visits couldn't be easier
        </p>
        <button
          style={{
            width: "100%",
            background: "#111827",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "10px",
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
