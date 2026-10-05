import { useState } from "react"
import React from 'react'
import TaskModal from "./TaskModal"
import { createTask } from "../services/taskApi"
const DashboardHeader = ({onTasksChanged}) => {
    const [showModal, setShowModal] = useState(false)
  return (
    <div className='dashboard'>
        <div className="dashboard-info">
        <h2 className="dashboard-title">
          My Tasks
        </h2>

        <p className="dashboard-description">
          Manage and Track Daily Tasks
        </p>
      </div>

        <button className='add-task-button' onClick={()=>setShowModal(true)}> + Add Task</button>
         {showModal &&(
        <TaskModal
        onClose={()=>setShowModal(false)}
        onTaskCreated ={onTasksChanged}/>
    )}
    </div>
   
  )
}

export default DashboardHeader