import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './PageNav.module.css'

function PageNav() {
  return (
    <nav>
      <ul className={style.nav}>
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
