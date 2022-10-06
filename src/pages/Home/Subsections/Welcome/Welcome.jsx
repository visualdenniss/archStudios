import React from 'react'

import './Welcome.css'
const Welcome = () => {
    return (
        <div className='welcome-section'>
            <h2 className='section-title-big'><span>Welcome</span></h2>
            <section className='welcome-section-container'>
            <div className="section-text-content">
            <h3 className='section-title'>Welcome to Arch Studio</h3>
            <p className='welcome-desc'>
                We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.
            </p>
            <p className='welcome-desc'>
                Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.
            </p>
            <p className='welcome-desc'>
                We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.
            </p>
            </div>
            <div className="welcome-img-container">
                <img src="https://images.unsplash.com/photo-1630335856915-3987afdfdc9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="" />
            </div>
            </section>
        </div>
    )
}

export default Welcome
