import React from 'react'
import TaskCard from './TaskCard'

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="task-list">

      <div className="task-list-header">
        <h2>Tasks</h2>
        <span>{tasks.length} tasks</span>
      </div>

      <div className="task-list-container">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskCard
              key={task.task_id}
              task={task}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        ) : (
          <div className="no-tasks">
            No tasks found
          </div>
        )}
      </div>

    </div>
  )
}

export default TaskList