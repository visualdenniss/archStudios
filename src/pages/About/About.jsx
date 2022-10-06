import React from 'react'

import AboutHeader from './Subsections/AboutHeader/AboutHeader'; 
import Heritage from './Subsections/Heritage/Heritage'
import Leaders from './Subsections/Leaders/Leaders'

import './About.css'
const About = () => {
    return (
        <div className="about">
          <AboutHeader></AboutHeader>
          <Heritage></Heritage>
          <Leaders></Leaders>
        </div>
    )
}

export default About
