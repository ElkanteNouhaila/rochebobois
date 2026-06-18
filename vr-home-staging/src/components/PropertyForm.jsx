export default function PropertyForm() {
  const inputStyle = {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  };

  return (
    <form
      style={{
        background: "#fff",
        borderRadius: "16px",
        padding: "24px",
        boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
      onSubmit={(e) => e.preventDefault()}
    >
      <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#111827", margin: 0 }}>
        Property Details
      </h2>

      <input type="text" placeholder="Client Name" style={inputStyle} />
      <input type="text" placeholder="Property Address" style={inputStyle} />

      <select style={{ ...inputStyle, background: "#fff" }}>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Penthouse</option>
      </select>

      <input type="url" placeholder="3D Visit Link (Matterport simulation)" style={inputStyle} />

      <button
        type="submit"
        style={{
          marginTop: "4px",
          padding: "12px",
          borderRadius: "10px",
          border: "none",
          background: "#111827",
          color: "#fff",
          fontSize: "14px",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Create Project
      </button>
    </form>
  );
}
