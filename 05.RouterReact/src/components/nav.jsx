import React from 'react'
import { NavLink } from 'react-router-dom'
const nav = () => {
  return (
    <>
    <ul className="navbar-nav">
    <li className="nav-item">
      <NavLink to="/" className="nav-link">Home</NavLink> <span className="sr-only">(current)</span>
    </li>
    <li className="nav-item">
      <NavLink to="/about" className="nav-link"> About </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
    </li>
  </ul>
    </>
  )
}

export default nav
