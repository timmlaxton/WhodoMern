import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="navbar bg-dark">
     <h1>
       <Link to='/'><i className='fas fa-code'></i> Todo</Link>
     </h1>
      <ul>
        <Link to="/profiles">Todos</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
       
      </ul>

   </nav>
  )
}

export default Navbar
