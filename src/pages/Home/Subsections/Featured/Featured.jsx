import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-section'>
            <div className="featured-content">
                <div className="featured-title">
                    <h2>Featured</h2>
                </div>
                <button className='hero-button featured-btn'>
                <p className='hero-button-desc'>
                See All
                </p>
                <HiOutlineArrowRight></HiOutlineArrowRight>
            </button>
            </div>
            <div className="featured-images-container">
                <div className="featured-item">
                    <img className='featured-img' src="https://images.unsplash.com/photo-1525286335722-c30c6b5df541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGFyY2hpdGVjdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    <span>1</span>
                    <h3>Project Del Sol</h3>
                    <a href="">View all Projects</a>
                </div>
                <div className="featured-item">
                    <img className='featured-img' src="https://images.unsplash.com/photo-1526546334624-2afe5b01088d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxhcmNoaXRlY3R1cmUlMjBtaW5pbWFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    <span>2</span>
                    <h3>228B Tower</h3>
                    <a href="">View all Projects</a>
                </div>
                <div className="featured-item">
                    <img className='featured-img' src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60" alt="" />
                    <span>3</span>
                    <h3>Le Prototype </h3>
                    <a href="">View all Projects</a>
                </div>
            </div>

            <button className='hero-button featured-btn featured-mobile-only'>
                <p className='hero-button-desc'>
                See All
                </p>
                <HiOutlineArrowRight></HiOutlineArrowRight>
            </button>
        </div>
    )
}

export default Featured
