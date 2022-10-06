import React from 'react'

import './AboutContactIntro.css'
const AboutContactIntro = ({span,title,p,img,classname}) => {
    return (
        <div className='aboutcontact-header'>
            <div className="intro-img-wrapper">
                <img className='intro-img' src={img} alt="" />
            </div>
            <div className="intro-content">
            <span className={classname}>
                {span}
            </span>
            <div className="separator-line"></div>
            <h2>
                {title}
            </h2>
            <p>
                {p}
            </p>
            </div>
        </div>
    )
}

export default AboutContactIntro
