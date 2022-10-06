import React from 'react'

import Hero from './Subsections/Hero/Hero'
import Welcome from './Subsections/Welcome/Welcome'
import About from './Subsections/About/About'
import Featured from './Subsections/Featured/Featured'
import './Home.css'
const Home = () => {
    return (
        <div className='home'>
            <Hero></Hero>
            <Welcome></Welcome>
            <About></About>
            <Featured></Featured>
        </div>
    )
}

export default Home
