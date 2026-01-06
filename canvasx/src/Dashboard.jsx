import { createProject } from "./utils/projects";

export default function Dashboard({ projects, setProjects, onOpen }) {
  function handleCreate() {
    const name = prompt("Project name?");
    if (!name) return;

    const project = createProject(name);
    setProjects(prev => [project, ...prev]);
    onOpen(project.id);
  }

  return (
    <div className="dashboard">
      <h2>Your Projects</h2>

      <div className="project-grid">
        <div className="project-card new" onClick={handleCreate}>
          <span>+</span>
          <p>Create New Project</p>
        </div>

        {projects.map(project => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => onOpen(project.id)}
          >
            <h4>{project.name}</h4>
            <small>
              {new Date(project.lastUpdated).toLocaleString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
