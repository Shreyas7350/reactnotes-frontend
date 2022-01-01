import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
    <nav className='navbar'>
        <h2 className='primary-color'>Notes App</h2>
        <div>
         <Link to="/">Home</Link>
         <Link to="#" style={{marginLeft:"10px"}}> New Note</Link>
        </div>
    </nav>
    )
}

export default Navbar
