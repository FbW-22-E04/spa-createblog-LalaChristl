import React from 'react'
import {NavLink} from 'react-router-dom'

function Header () {
  return (
    <div>
     <ul className= 'nav-bar'>
                <NavLink activeclassname='active' to='/' end ><li>Home</li></NavLink>

                <NavLink  to='/create-post'><li>Create Post</li></NavLink>

                <NavLink  to='/show-post'><li>Show Current Post</li></NavLink>
                </ul>
    </div>
  )
}

export default Header
