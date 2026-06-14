# Notes API v1

A RESTful notes API built with Node.js and Express. In-memory data storage — no database.

## Tech Stack

- Node.js v20
- Express 5

## Features

- Full CRUD for notes (GET, POST, PUT, PATCH, DELETE)
- Input validation and error handling
- Global 404 and error handling middleware
- Professional folder structure — routes, controllers

## Project Structure

```

notes-api/
├── app.js
├── server.js
├── routes/
│   └── notes.js
└── controllers/
└── notes.js

```

## Getting Started

```bash
npm install
node server.js
```

API runs on http://localhost:3000

## API Reference

| Method | Endpoint   | Description             |
| ------ | ---------- | ----------------------- |
| GET    | /notes     | Get all notes           |
| GET    | /notes/:id | Get a single note       |
| POST   | /notes     | Create a note           |
| PATCH  | /notes/:id | Partially update a note |
| PUT    | /notes/:id | Replace a note entirely |
| DELETE | /notes/:id | Delete a note           |

## Key Decision

Built in-memory first deliberately — to understand routing, middleware, and REST design without database complexity. Database added in v2.
