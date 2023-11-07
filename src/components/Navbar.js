import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <Link to='/'>
            <div className='navbar'>

                <h1> <span className='purple'> Zeya Rabani</span></h1>
                <h2>C10</h2>
            </div>
        </Link>
    )
}

export default Navbar