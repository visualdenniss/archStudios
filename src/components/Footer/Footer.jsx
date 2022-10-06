import React from 'react'
import { Link } from 'react-router-dom'
import {HiOutlineArrowRight} from 'react-icons/hi'
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                Arch 
            </div>
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
            <button className='hero-button'>
                <p className='hero-button-desc'>
                See Our Portfolio
                </p>
                <HiOutlineArrowRight></HiOutlineArrowRight>
            </button>
        </div>
    )
}

export default Footer
