TeamFlow - Project Management System

Project Overview

TeamFlow is a full-stack project management application developed using React, Node.js, Express.js, and SQLite. It enables teams to efficiently manage projects, organize tasks, monitor progress, and track deadlines through a clean and responsive interface.

The application demonstrates a complete client-server architecture with REST APIs and persistent database storage.


Features

Project Management

- Create Project
- Edit Project
- Delete Project
- Search Projects

Task Management

- Create Task
- Delete Task
- Update Task Status
- Priority Levels (High, Medium, Low)
- Due Date Tracking

Dashboard

- Total Projects
- Total Tasks
- Completed Tasks
- Overall Progress Percentage

User Interface

- Responsive Design
- Modern Dashboard
- Progress Bars
- Status Badges
- Priority Badges

---

Tech Stack

Frontend

- React
- Vite
- CSS

Backend

- Node.js
- Express.js

Database

- SQLite

Project Structure

TeamFlow
│
├── frontend
│ ├── src
│ ├── components
│ ├── App.jsx
│ └── App.css
│
├── backend
│ ├── database
│ ├── db
│ ├── index.js
│ └── package.json
│
├── README.md
├── Architecture.md
├── API_Documentation.md
├── Database_Schema.md
└── Design_Decisions.md


Installation

Backend

cd backend
npm install
npm run dev

Backend URL
http://localhost:3001

Frontend

cd frontend
npm install
npm run dev

Frontend URL
http://localhost:5173
---

REST API

Projects

| Method | Endpoint |
|---------|----------|
| GET | /projects |
| POST | /projects |
| PUT | /projects/:id |
| DELETE | /projects/:id |

Tasks

| Method | Endpoint |
|---------|----------|
| GET | /tasks/:projectId |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

---

Database

Projects

- id
- name
- description

Tasks

- id
- projectId
- title
- status
- priority
- dueDate

---
System Architecture

![Architecture](Architecture_Diagram.png)

---

ER Diagram

![ER Diagram](ER_Diagram.png)
# Authentication

This version of TeamFlow does not implement user authentication.

The application starts directly with the project dashboard, allowing users to manage projects and tasks without login credentials.

Authentication and role-based access control are planned as future enhancements.

# Future Improvements

- Authentication
- Role-Based Access Control
- Email Notifications
- Team Collaboration
- File Uploads
- Comments
- Activity Logs

---

# Author

**PravalikaPola**

Electronics and Communication Engineering

Full Stack Developer
