import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <span>
        <Link to="/">Home </Link>
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link>
    </span>
  )
}

export default Navbar