from app.database.supabase import supabase


def get_all_tasks():
    response = (
        supabase
        .table("tasks")
        .select("*")
        .order("created_at", desc=True)
        .execute()
    )
    return response.data


def get_task(task_id: int):
    response = (
        supabase
        .table("tasks")
        .select("*")
        .eq("task_id", task_id)
        .execute()
    )
    return response.data[0] if response.data else None


def create_task(task_data: dict):
    response = (
        supabase
        .table("tasks")
        .insert(task_data)
        .execute()
    )
    return response.data[0]


def update_task(task_id: int, task_data: dict):
    response = (
        supabase
        .table("tasks")
        .update(task_data)
        .eq("task_id", task_id)
        .execute()
    )
    return response.data[0] if response.data else None


def delete_task(task_id: int):
    response = (
        supabase
        .table("tasks")
        .delete()
        .eq("task_id", task_id)
        .execute()
    )
    return response.data