import { useEffect, useState } from "react";
import { fetchProjects, createProject } from "../api/projects";
function Projects({ onOpen }) {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
  fetchProjects()
    .then(data => {
      if (Array.isArray(data)) {
        setProjects(data);
      } else {
        setProjects([]);
      }
    })
    .catch(() => {
      setProjects([]);
    });
}, []);

  const handleCreate = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("Please login to create a project");
        return;
    }
    const name = prompt("Project name?");
    if (!name) return;

    const project = await createProject(name);
    setProjects(prev => [project, ...prev]);
    onOpen(project._id);
  };

  return (
    <div className="projects-page">
      <h2>Your Projects</h2>

      <div className="project-grid">
        <div className="project-card create" onClick={handleCreate}>
          <span>＋</span>
          <p>Create New</p>
        </div>

        {projects.map(project => (
          <div
            key={project._id}
            className="project-card"
            onClick={() => onOpen(project._id)}
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

export default Projects;
