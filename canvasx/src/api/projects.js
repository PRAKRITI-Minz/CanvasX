const BASE_URL = "http://localhost:5000/projects";

function authHeader() {
  const token = localStorage.getItem("token");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };
}

export async function fetchProjects() {
  const res = await fetch(BASE_URL, {
    headers: authHeader()
  });
  return res.json();
}

export async function fetchProject(id) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    headers: authHeader()
  });
  return res.json();
}

export async function createProject(name) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: authHeader(),
    body: JSON.stringify({ name })
  });
  return res.json();
}

export async function updateProjectBlocks(id, blocks) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: authHeader(),
    body: JSON.stringify({ blocks })
  });
  return res.json();
}

export async function deleteProject(id) {
  await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: authHeader()
  });
}
