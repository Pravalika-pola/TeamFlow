const express = require("express");
const cors = require("cors");
const connectDB = require("./database/database");

const app = express();

app.use(cors());
app.use(express.json());

let db;

(async () => {
  db = await connectDB();

  // Projects table
  await db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT
    );
  `);

  // Tasks table
  await db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    projectId INTEGER,
    title TEXT NOT NULL,
    status TEXT DEFAULT 'To Do',
    priority TEXT DEFAULT 'Medium',
    dueDate TEXT,
    FOREIGN KEY(projectId) REFERENCES projects(id)
  );
`);

  console.log("✅ Database Connected");
})();

// Home Route
app.get("/", (req, res) => {
  res.send("🚀 TeamFlow Backend is Running!");
});

// ================= PROJECT ROUTES =================

// Create Project
app.post("/projects", async (req, res) => {
  const { name, description } = req.body;

  await db.run(
    "INSERT INTO projects (name, description) VALUES (?, ?)",
    [name, description]
  );

  res.json({ message: "Project created successfully" });
});

// Get Projects
app.get("/projects", async (req, res) => {
  const projects = await db.all("SELECT * FROM projects");
  res.json(projects);
});

// Delete Project
app.delete("/projects/:id", async (req, res) => {
  await db.run("DELETE FROM projects WHERE id = ?", [req.params.id]);
  res.json({ message: "Project deleted successfully" });
});
// Update Project
app.put("/projects/:id", async (req, res) => {
  const { name, description } = req.body;

  await db.run(
    "UPDATE projects SET name = ?, description = ? WHERE id = ?",
    [name, description, req.params.id]
  );

  res.json({ message: "Project updated successfully" });
});
// ================= TASK ROUTES =================

// Create Task
// Create Task
app.post("/tasks", async (req, res) => {
  const {
    projectId,
    title,
    priority,
    dueDate,
  } = req.body;

  await db.run(
    `INSERT INTO tasks
    (projectId, title, priority, dueDate)
    VALUES (?, ?, ?, ?)`,
    [
      projectId,
      title,
      priority || "Medium",
      dueDate || null,
    ]
  );

  res.json({
    message: "Task created successfully",
  });
});

// Get Tasks for a Project
app.get("/tasks/:projectId", async (req, res) => {
  const tasks = await db.all(
    "SELECT * FROM tasks WHERE projectId = ?",
    [req.params.projectId]
  );

  res.json(tasks);
});

// Update Task Status
app.put("/tasks/:id", async (req, res) => {
  const { status } = req.body;

  await db.run(
    "UPDATE tasks SET status = ? WHERE id = ?",
    [status, req.params.id]
  );

  res.json({ message: "Task updated successfully" });
});

// Delete Task
app.delete("/tasks/:id", async (req, res) => {
  await db.run("DELETE FROM tasks WHERE id = ?", [req.params.id]);

  res.json({ message: "Task deleted successfully" });
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});