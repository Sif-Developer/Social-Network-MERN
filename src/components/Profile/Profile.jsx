import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Login/Login'
import Register from '../Register/Register'
import "./Profile.scss"

function Profile() {
    const {user} = useSelector((state) => state.auth)
  return (
    <div className='profile-container'>
        <div className='space-nav'></div>
        <h1>Profile page</h1>
        <Register/>
        <br></br>
        <Login/>
        <div>
            <span>{user.first_name} </span>
            <span>{user.last_name} </span>
            <span>{user.spanhone} </span>
            <span>{user.gender} </span>
            <span>{user.age} </span>
        </div>
    </div>
  )
}

export default Profile