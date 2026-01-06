import { useEffect, useState } from "react";
import { apiRequest } from "../api/api";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    apiRequest("/projects")
      .then(setProjects)
      .catch(err => alert(err.message));
  }, []);

  return (
    <div>
      <h2>Your Projects</h2>

      {projects.map(p => (
        <div key={p._id}>
          {p.name}
        </div>
      ))}
    </div>
  );
}
