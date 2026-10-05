from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.task_routes import router as task_router


app = FastAPI(
    title="Task Manager API",
    description="Backend API for Task Manager",
   
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://internship-task-1-gamma.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(task_router)


@app.get("/")
def root():
    return {
        "message": "Task Manager API is running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }