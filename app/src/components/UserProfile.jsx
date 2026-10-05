import React, { useState } from 'react'
import useravatar from '../assets/user-avatar.jpg'

const UserProfile = () => {

    const [showProfile, setShowProfile] = useState(false)
  return (
    <div className='user-profile'>
        <img  className='user-avatar' src={useravatar} 
        alt='User Profile avatar'
        onClick={() => setShowProfile(!showProfile)}/>
           
           {showProfile && (
            <div className='dropdown'>
             <div className='user-info'>
             <h2 >Dipika Choudhary</h2>
        <p >Full - Stack Developer </p>
        </div>
       </div>
           )}
    
       
    </div>
  )
}

export default UserProfile