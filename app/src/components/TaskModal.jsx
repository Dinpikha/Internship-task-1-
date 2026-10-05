import React, { useState } from 'react'
import CustomDropdown from './CustomDropdown'
import { createTask } from '../services/taskApi'

const TaskModal = ({ onClose,onTaskCreated }) => {
  const [title, setTitle] = useState('')
const [description, setDescription] = useState('')
const [status, setStatus] = useState('Pending')
const [priority, setPriority] = useState('Medium')
const handleSave = async () => {
  if (!title.trim()) {
    return
  }

  try {
    await createTask({
      title: title,
      description: description,
      status: status,
      priority: priority
    })

    await onTaskCreated()

    onClose()
  } catch (error) {
    console.error(error)
  }
}
  return (
    <div className="modal-overlay">

      <div className="task-card">

        <div className="task-card-head">
          <h2>Add New Task</h2>

          <button
            className="close-button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="task-card-elements">

          <label>
            Title

            <input
              type="text"
              placeholder="Enter task title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
            />
          </label>

          <label>
            Description
            <textarea
            placeholder="Enter task description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label>
            Status

            <CustomDropdown
              value={status}
              onChange={setStatus}
              placeholder="Select status"
              options={[
                { value: 'Pending', label: 'Pending' },
                { value: 'In Progress', label: 'In Progress' },
                { value: 'Completed', label: 'Completed' }
              ]}
            />
          </label>

          <label>
            Priority

            <CustomDropdown
              value={priority}
              onChange={setPriority}
              placeholder="Select priority"
              options={[
                { value: 'Low', label: 'Low' },
                { value: 'Medium', label: 'Medium' },
                { value: 'High', label: 'High' }
              ]}
            />
          </label>

        </div>

        <div className="task-submit">

          <button
            className="task-cancel"
            onClick={onClose}
          >
            Cancel
          </button>

            <button
        className="task-save"
        onClick={handleSave}
        >
        Save Task
        </button>

        </div>

      </div>

    </div>
  )
}

export default TaskModal