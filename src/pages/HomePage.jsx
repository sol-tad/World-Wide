import React from 'react'
import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav'

function HomePage() {
  return (
    <div>
      <PageNav/>
      World Wise
      <Link to="/product">Product</Link>
    </div>
  )
}

export default HomePage
