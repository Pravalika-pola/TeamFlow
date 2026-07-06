import { useState } from "react";
import TaskCard from "./TaskCard";

function ProjectCard({
  project,
  onDeleteProject,
  onEditProject,
  onAddTask,
  onDeleteTask,
  onStatusChange,
}) {
  const [taskTitle, setTaskTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  
  const [editing, setEditing] = useState(false);
  const [editName, setEditName] = useState(project.name);
  const [editDescription, setEditDescription] = useState(project.description);

  const completed = project.tasks.filter(
    (t) => t.status === "Done"
  ).length;

  const percentage =
    project.tasks.length === 0
      ? 0
      : Math.round((completed / project.tasks.length) * 100);

  return (
    <div className="project-card">

     {editing ? (
     <>
    <input
      value={editName}
      onChange={(e) => setEditName(e.target.value)}
    />

    <textarea
      value={editDescription}
      onChange={(e) => setEditDescription(e.target.value)}
    />

    <button
      onClick={() => {
        onEditProject(project.id, editName, editDescription);
        setEditing(false);
      }}
    >
      Save
    </button>
  </>
) : (
  <>
    <h2 className="project-title">{project.name}</h2>

    <p>{project.description}</p>

<div style={{ marginTop: "10px", marginBottom: "15px" }}>
  <button onClick={() => setEditing(true)}>
    Edit Project
  </button>
</div>
  </>
)}

      <strong>
        {completed}/{project.tasks.length} Tasks Completed
      </strong>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: percentage + "%" }}
        />
      </div>

      <p>{percentage}% Complete</p>

      <button onClick={() => onDeleteProject(project.id)}>
        Delete Project
      </button>

      <hr style={{ margin: "20px 0" }} />

      <h3>Add Task</h3>

      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
      />

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button
        onClick={() => {
          onAddTask(project.id, taskTitle, priority, dueDate);
          setTaskTitle("");
          setPriority("Medium");
          setDueDate("");
        }}
      >
        Add Task
      </button>

      <h3>Tasks</h3>

      {project.tasks.length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        project.tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDeleteTask}
            onStatusChange={onStatusChange}
          />
        ))
      )}
    </div>
  );
}

export default ProjectCard;