# TaskFlow

A full-stack Task Management Web Application built with React, FastAPI, and Supabase PostgreSQL.

## Features

- Create, edit, and delete tasks
- Search tasks
- Filter by status and priority
- Task status and priority management
- REST API with FastAPI
- PostgreSQL database using Supabase
- Responsive UI

## Tech Stack

- **Frontend:** React, JavaScript, CSS
- **Backend:** Python, FastAPI
- **Database:** PostgreSQL, Supabase

## Run Locally

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## API

```text
GET    /tasks/
GET    /tasks/{task_id}
POST   /tasks/
PUT    /tasks/{task_id}
DELETE /tasks/{task_id}
```

## Environment Variables

Create a `.env` file in the backend:

```env
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
```
