import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'
import './About.css'
const About = () => {
    return (
        <div className='about-section'>
            <h2 className="about-section-title">
                Small team, <br></br>
                big ideas
            </h2>
            <button className='hero-button'>
                <p className='hero-button-desc'>
                About Us
                </p>
                <HiOutlineArrowRight></HiOutlineArrowRight>
            </button>
        </div>
    )
}

export default About
