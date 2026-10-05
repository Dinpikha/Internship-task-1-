import React, { useEffect, useState } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import StatsCards from '../components/StatsCards'
import SearchFilter from '../components/SearchFilter'
import TaskList from '../components/TaskList'
import { getTasks, deleteTask, updateTask ,createTask} from '../services/taskApi'

const Dashboard = () => {
    const [tasks,setTasks] = useState([])
   
  const [search,setSearch]=useState('')
  const[statusFilter,setStatusFilter]=useState('')
  const[priorityFilter,setPriorityFilter]=useState('')

    useEffect(()=>{
        loadTasks()
    },[])
  const filteredTasks = tasks.filter((task)=>{
    const matchesSearch = 
    task.title.toLowerCase().includes(search.toLowerCase())||
    task.description.toLowerCase().includes(search.toLowerCase())

    const matchesStatus = statusFilter === '' || task.status === statusFilter


    const matchesPriortiy = priorityFilter === '' || task.priority === priorityFilter

    return matchesSearch && matchesStatus && matchesPriortiy
  })
  

  const handleDelete = async (id) =>{
    try{
        await deleteTask(id) 
        setTasks(
             tasks.filter((task) => task.task_id !== id)
        )
    }catch(error){
        console.error(error)
    }
  }

const handleEdit = async (updatedTask) => {
  try {
    const updated = await updateTask(
      updatedTask.task_id,
      {
        title: updatedTask.title,
        description: updatedTask.description,
        status: updatedTask.status,
        priority: updatedTask.priority
      }
    )

    setTasks(
      tasks.map((task) =>
        task.task_id === updated.task_id
          ? updated
          : task
      )
    )
  } catch (error) {
    console.error(error)
  }
}
const loadTasks = async () => {
  try {
    const data = await getTasks()
    setTasks(data)
  } catch (error) {
    console.error(error)
  }
}
  return (<>
   <DashboardHeader onTasksChanged={loadTasks} />
   <StatsCards tasks={tasks} />
   <SearchFilter 
        search={search}
        setSearch={setSearch}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
   />
   <TaskList 
        tasks={filteredTasks}
        onDelete={handleDelete}
        onEdit={handleEdit}/>
   </>
   
  )
}

export default Dashboard