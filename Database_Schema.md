# Database Schema

## Projects Table

| Column | Type | Description |
|---------|------|-------------|
| id | INTEGER | Primary Key |
| name | TEXT | Project Name |
| description | TEXT | Project Description |

---

## Tasks Table

| Column | Type | Description |
|---------|------|-------------|
| id | INTEGER | Primary Key |
| projectId | INTEGER | Foreign Key |
| title | TEXT | Task Title |
| status | TEXT | Task Status |
| priority | TEXT | Task Priority |
| dueDate | TEXT | Due Date |

---

## Relationship

One Project

↓

Contains

↓

Many Tasks

Project (1)

↓

Task (Many)