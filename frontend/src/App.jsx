import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  // Load all projects and their tasks
  const fetchProjects = async () => {
  const res = await fetch("http://127.0.0.1:3001/projects");
  const data = await res.json();

  console.log("Projects from backend:", data);

  const projectsWithTasks = await Promise.all(
    data.map(async (project) => {
      const taskRes = await fetch(
        `http://127.0.0.1:3001/tasks/${project.id}`
      );
      const tasks = await taskRes.json();

      return {
        ...project,
        tasks,
      };
    })
  );

  console.log("Projects with tasks:", projectsWithTasks);

  setProjects(projectsWithTasks);
};

  useEffect(() => {
    fetchProjects();
  }, []);

  // Create Project
  const addProject = async () => {
    if (!name.trim()) {
      alert("Project name is required");
      return;
    }

    await fetch("http://127.0.0.1:3001/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });

    setName("");
    setDescription("");
    fetchProjects();
  };

  // Delete Project
  const deleteProject = async (id) => {
    await fetch(`http://127.0.0.1:3001/projects/${id}`, {
      method: "DELETE",
    });

    fetchProjects();
  };
  const editProject = async (id, name, description) => {
  await fetch(`http://127.0.0.1:3001/projects/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      description,
    }),
  });

  fetchProjects();
};

  // Add Task
  const addTask = async (projectId, title, priority, dueDate) => {
  if (!title.trim()) return;

  await fetch("http://127.0.0.1:3001/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      projectId,
      title,
      priority,
      dueDate,
    }),
  });

  fetchProjects();
};

  // Delete Task
  const deleteTask = async (id) => {
    await fetch(`http://127.0.0.1:3001/tasks/${id}`, {
      method: "DELETE",
    });

    fetchProjects();
  };

  // Change Status
  const updateStatus = async (id, status) => {
    await fetch(`http://127.0.0.1:3001/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status,
      }),
    });

    fetchProjects();
  };

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Navbar />

      <Dashboard projects={projects} />

      <div className="create-project">
        <h2>Create Project</h2>

        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button onClick={addProject}>Create Project</button>
      </div>

      <input
        className="search-box"
        placeholder="Search Projects..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onDeleteProject={deleteProject}
          onEditProject={editProject}
          onAddTask={addTask}
          onDeleteTask={deleteTask}
          onStatusChange={updateStatus}
        />
      ))}
    </div>
  );
}

export default App;
