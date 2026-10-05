import React from 'react'
import appicon from '../assets/app-icon.jpg'
const AppLogo = () => {
  return (
    <div className='app-logo'>
        <img className='app-icon' src={appicon} />
           
      
        
        <div className='app-info'>
            <h2>Task Management Web Application</h2>
            <p>Manage Tasks Daily </p>
        </div>
    </div>
  )
}

export default AppLogo