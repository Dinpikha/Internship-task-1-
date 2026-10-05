import React, { useState } from 'react'
import CustomDropdown from './CustomDropdown'

const TaskCard = ({ task, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTask, setEditedTask] = useState(task)

  const handleChange = (e) => {
    setEditedTask({
      ...editedTask,
      [e.target.name]: e.target.value
    })
  }

  const handleSave = () => {
    onEdit(editedTask)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <div className="task-item">

        <div className="edit-task-form">

          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
          />

          <CustomDropdown
            value={editedTask.status}
            onChange={(value) =>
              setEditedTask({
                ...editedTask,
                status: value
              })
            }
            options={[
              { value: 'Pending', label: 'Pending' },
              { value: 'In Progress', label: 'In Progress' },
              { value: 'Completed', label: 'Completed' }
            ]}
          />

          <CustomDropdown
            value={editedTask.priority}
            onChange={(value) =>
              setEditedTask({
                ...editedTask,
                priority: value
              })
            }
            options={[
              { value: 'Low', label: 'Low' },
              { value: 'Medium', label: 'Medium' },
              { value: 'High', label: 'High' }
            ]}
          />

          <div className="task-actions">

            <button onClick={handleSave}>
              Save
            </button>

            <button onClick={() => setIsEditing(false)}>
              Cancel
            </button>

          </div>

        </div>

      </div>
    )
  }

  return (
    <div className="task-item">

      <div className="task-item-content">

        <h3>{task.title}</h3>

        <p>{task.description}</p>

        <div className="task-meta">

          <span
            className={`task-status ${task.status
              .toLowerCase()
              .replace(' ', '-')}`}
          >
            {task.status}
          </span>

          <span
            className={`task-priority ${task.priority.toLowerCase()}`}
          >
            {task.priority}
          </span>

        </div>

      </div>

      <div className="task-actions">

       <button
            onClick={() => {
                setEditedTask(task)
                setIsEditing(true)
            }}
            >
            Edit
            </button>

        <button onClick={() => onDelete(task.task_id)}>
          Delete
        </button>

      </div>

    </div>
  )
}

export default TaskCard