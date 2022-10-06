import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'


import {HiOutlineArrowRight} from 'react-icons/hi'
import './Hero.css'
const Hero = () => {

    const imgs = [
        {id:0, value:'01',img:'https://images.unsplash.com/photo-1570696557714-01186e96d8c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80'},
        {id:1,value:'02',img:'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80'},
        {id:2,value:'03',img:'https://images.unsplash.com/photo-1576831356777-59f382e176b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},
        {id:3,value:'04',img:'https://images.unsplash.com/photo-1562960770-77a54cb1bb80'},
        
    ]

    const handleClick = (index) => {
        const slider = imgs[index]
        setSliderData(slider)
    }

    const [sliderData,setSliderData] = useState(imgs[0])

    return (
        <div className='hero'>
                <div className="image-container">
                     <img src={sliderData.img} alt="" />
                </div>
            <div className="hero-container">
            <h1 className='header-title'>Project <br/> Paramour </h1>
            <p className='hero-desc'>
                Project made for an art museum near Southwest London. <br/>
                Project Paramour is a statement of bold, modern architecture.
            </p>
            <button className='hero-button'>
                <p className='hero-button-desc'>
                See Our Portfolio
                </p>
                <HiOutlineArrowRight></HiOutlineArrowRight>
            </button>
            <div className="carousal">
                {imgs.map((item,index)=>(
                   <button className={sliderData.id==index? "carousal-btn active" : "carousal-btn"}
                   key={item.id}
                   onClick={()=>handleClick(index)}
                   >{item.value}</button> 
                ))}
            </div>
            </div>
        </div>
    )
}

export default Hero
