from fastapi import APIRouter, HTTPException
from app.models.task import TaskCreate, TaskUpdate
from app.services.task_service import (
    get_all_tasks,
    get_task,
    create_task,
    update_task,
    delete_task
)

router = APIRouter(prefix="/tasks", tags=["Tasks"])


@router.get("/")
def read_tasks():
    return get_all_tasks()


@router.get("/{task_id}")
def read_task(task_id: int):
    task = get_task(task_id)

    if not task:
        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    return task


@router.post("/")
def add_task(task: TaskCreate):
    return create_task(task.model_dump())


@router.put("/{task_id}")
def edit_task(task_id: int, task: TaskUpdate):

    existing_task = get_task(task_id)

    if not existing_task:
        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    update_data = task.model_dump(exclude_unset=True)

    return update_task(task_id, update_data)


@router.delete("/{task_id}")
def remove_task(task_id: int):

    existing_task = get_task(task_id)

    if not existing_task:
        raise HTTPException(
            status_code=404,
            detail="Task not found"
        )

    delete_task(task_id)

    return {
        "message": "Task deleted successfully"
    }