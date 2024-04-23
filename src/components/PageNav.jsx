import React from 'react'
import { NavLink } from 'react-router-dom'

function PageNav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home </NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/pricing"> Pricing</NavLink></li>
      </ul>
      <ul>
        <li><NavLink to="/product">Product </NavLink></li>
      </ul>
    </nav>
  )
}

export default PageNav
