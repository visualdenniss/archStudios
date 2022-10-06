import React from 'react'

import './Heritage.css'
const Heritage = () => {
    return (
        <div className='heritage'>
            <div className="heritage-text-content">
            <div className="separator-line"></div>
            <h2 className='heritage-title'>
                Our Heritage
            </h2>
            <p className="heritage-desc">
                Founded in 2007, we started as a tria of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most saught after boutique firms in the country
            </p>
            <p className="heritage-desc">
                Specializing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs. 
            </p>
            <p className="heritage-desc">
                Our small team of world-class professionals provides input on every project.
            </p>
            </div>
            <div className="heritage-img-wrapper">
                <img src="https://images.unsplash.com/photo-1532153955177-f59af40d6472?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className="heritage-img" />
            </div>
        </div>
    )
}

export default Heritage
