import React from 'react'
import StatCard from './StatCard'

import totalIcon from '../assets/tasks.jpg'
import pendingIcon from '../assets/pending.jpg'
import progressIcon from '../assets/progress.jpg'
import completedIcon from '../assets/completed.jpg'

const StatsCards = ({ tasks }) => {
  return (
    <div className="stat-cards">

      <StatCard
        icon={totalIcon}
        title="Total Tasks"
        count={tasks.length}
        description="All tasks"
      />

      <StatCard
        icon={pendingIcon}
        title="Pending"
        count={tasks.filter((task) => task.status === 'Pending').length}
        description="Need attention"
      />

      <StatCard
        icon={progressIcon}
        title="In Progress"
        count={tasks.filter((task) => task.status === 'In Progress').length}
        description="Currently working"
      />

      <StatCard
        icon={completedIcon}
        title="Completed"
        count={tasks.filter((task) => task.status === 'Completed').length}
        description="Finished tasks"
      />

    </div>
  )
}

export default StatsCards