export default function UserAvatars({ assignees }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {assignees.map((a, i) => (
        <img
          key={a.id}
          src={a.avatar}
          alt={a.name}
          title={a.name}
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            border: "2px solid #fff",
            objectFit: "cover",
            marginLeft: i === 0 ? 0 : "-8px",
            zIndex: assignees.length - i,
            position: "relative",
          }}
        />
      ))}
    </div>
  );
}
