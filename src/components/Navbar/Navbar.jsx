import React, {useRef} from 'react'
import { Link } from 'react-router-dom'
import {RiMenuLine} from 'react-icons/ri'

import './Navbar.css'

const Navbar = () => {


    const navRef = useRef()

    const showNavbar = () => {
        navRef.current.classList.toggle("toggle-active")
    }

    const closeNavbar = () => {
        navRef.current.classList.remove("toggle-active")
    }

    return (
        <div className='navbar'>        
                <Link to='/' className="logo" onClick={closeNavbar}>
                Arch 
                </Link>
            <nav className='nav-container'>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/portfolio">Portfolio</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/about">About Us</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <div className="toggle-icon-container">
                <RiMenuLine className='toggle-icon' onClick={showNavbar}></RiMenuLine>
            </div>
            <nav ref={navRef} className='toggle-wrapper'>
                <ul className='toggle-nav-list'>
                    <li className='toggle-nav-item'>
                        <Link className='toggle-nav-link' to="/portfolio" onClick={showNavbar}>Portfolio</Link>
                    </li>
                    <li className='toggle-nav-item'>
                        <Link className='toggle-nav-link' to="/about" onClick={showNavbar}>About Us</Link>
                    </li>
                    <li className='toggle-nav-item'>
                        <Link className='toggle-nav-link' to="/contact" onClick={showNavbar}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
