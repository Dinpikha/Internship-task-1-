import React from 'react'

const StatCard = ({ icon, title, count, description }) => {
  return (
    <div className="stat-card">

      <div className="stat-icon">
        <img src={icon} alt="" />
      </div>

      <div className="stat-content">
        <p className="stat-title">{title}</p>

        <h2 className="stat-count">
          {count}
        </h2>

        <p className="stat-description">
          {description}
        </p>
      </div>

    </div>
  )
}

export default StatCard