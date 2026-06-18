import { useParams } from "react-router-dom";
import ProjectPreview from "../components/ProjectPreview";
import { projects } from "../data/mockData";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => String(p.id) === id) ?? projects[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", margin: 0 }}>
          Project Details
        </h1>
      </div>
      <ProjectPreview project={project} />
    </div>
  );
}
