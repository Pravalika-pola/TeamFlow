# API Documentation

## Projects

### GET /projects

Returns all projects.

---

### POST /projects

Creates a project.

Request

{
"name":"Project",
"description":"Description"
}

---

### PUT /projects/:id

Updates a project.

---

### DELETE /projects/:id

Deletes a project.

---

## Tasks

### GET /tasks/:projectId

Returns all tasks.

---

### POST /tasks

Creates task.

Request

{
"projectId":1,
"title":"Task",
"priority":"High",
"dueDate":"2026-07-06"
}

---

### PUT /tasks/:id

Updates task status.

---

### DELETE /tasks/:id

Deletes task.