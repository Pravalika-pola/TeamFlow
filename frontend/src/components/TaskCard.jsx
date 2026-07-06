function TaskCard({ task, onDelete, onStatusChange }) {
  const priorityColors = {
    High: "#ef4444",
    Medium: "#f59e0b",
    Low: "#22c55e",
  };

  const statusColors = {
    "To Do": "#dc2626",
    "In Progress": "#f59e0b",
    Done: "#16a34a",
  };

  return (
    <div
      className="task-card"
      style={{
        borderLeft: `6px solid ${statusColors[task.status]}`,
      }}
    >
      <div style={{ flex: 1 }}>
        <h4 style={{ marginBottom: "10px" }}>
          📌 {task.title}
        </h4>

        <span
          className="badge"
          style={{
            backgroundColor: priorityColors[task.priority],
            marginRight: "10px",
          }}
        >
          {task.priority} Priority
        </span>

        {task.dueDate && (
          <span
            style={{
              color: "#555",
              fontSize: "14px",
            }}
          >
            📅 Due: {task.dueDate}
          </span>
        )}
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <select
          value={task.status}
          onChange={(e) =>
            onStatusChange(task.id, e.target.value)
          }
        >
          <option>To Do</option>
          <option>In Progress</option>
          <option>Done</option>
        </select>

        <button
          style={{
            background: "#ef4444",
          }}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;