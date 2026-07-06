# Design Decisions

## Overview

TeamFlow follows a three-layer architecture to separate the presentation, business logic, and data storage layers. This improves maintainability, scalability, and readability.

---

## Frontend

- React was chosen for its component-based architecture.
- Vite provides fast development and build performance.
- CSS is used for responsive and lightweight styling.

---

## Backend

- Express.js was selected because it is lightweight and ideal for building REST APIs.
- API endpoints are separated logically for project and task management.
- CRUD operations are implemented using REST principles.

---

## Database

- SQLite was selected because it is lightweight, serverless, and easy to integrate for assignment-scale applications.
- Data is stored in two tables:
  - Projects
  - Tasks

---

## API Design

The backend exposes RESTful APIs for:

- Project CRUD
- Task CRUD
- Task Status Updates

All communication between the frontend and backend occurs through JSON-based HTTP requests.

---

## Future Enhancements

- JWT Authentication
- User Roles (Admin, Member)
- Team Collaboration
- File Uploads
- Notifications
- Email Integration
- Activity Logs