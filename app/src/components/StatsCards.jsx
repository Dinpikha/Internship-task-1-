import React from 'react'
import StatCard from './StatCard'
import completedIcon from '../assets/completed.jpg'
import pendingIcon from '../assets/pending.jpg'
import totalTaskIcon from '../assets/tasks.jpg'
import progressIcon from '../assets/progress.jpg'

const StatsCards = () => {
  return (
    <div className="stat-cards">

      <StatCard
        icon={totalTaskIcon}
        title="Total Tasks"
        count={12}
        description="All tasks"
      />

      <StatCard
        icon={pendingIcon}
        title="Pending"
        count={4}
        description="Need attention"
      />

      <StatCard
        icon={progressIcon}
        title="In Progress"
        count={3}
        description="Currently working"
      />

      <StatCard
        icon={completedIcon}
        title="Completed"
        count={5}
        description="Finished tasks"
      />

    </div>
  )
}

export default StatsCards