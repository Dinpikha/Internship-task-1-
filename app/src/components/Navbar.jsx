import React from 'react'
import AppLogo from './AppLogo'
import UserProfile from './UserProfile'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <AppLogo/>
        </div>
    
    <div className='navbar-right'>
        <UserProfile/>
    </div>
    </nav>
       
    
)
}

export default Navbar


