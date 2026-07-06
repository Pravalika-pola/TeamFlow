function Dashboard({ projects }) {
  const totalProjects = projects.length;

  const totalTasks = projects.reduce(
    (total, p) => total + p.tasks.length,
    0
  );

  const completedTasks = projects.reduce(
    (total, p) =>
      total +
      p.tasks.filter((t) => t.status === "Done").length,
    0
  );

  const progress =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="dashboard">
      <Card
        icon="📁"
        title="Projects"
        value={totalProjects}
      />

      <Card
        icon="📋"
        title="Tasks"
        value={totalTasks}
      />

      <Card
        icon="✅"
        title="Completed"
        value={completedTasks}
      />

      <Card
        icon="📈"
        title="Progress"
        value={progress + "%"}
      />
    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="dashboard-card">
      <div style={{ fontSize: "35px" }}>
        {icon}
      </div>

      <h3 style={{ marginTop: "10px" }}>
        {title}
      </h3>

      <h2 style={{ marginTop: "10px" }}>
        {value}
      </h2>
    </div>
  );
}

export default Dashboard;