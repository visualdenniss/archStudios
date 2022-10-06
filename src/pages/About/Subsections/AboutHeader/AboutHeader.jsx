import React from 'react'

import './AboutHeader.css'
import AboutContactIntro from '../../../../components/AboutContactIntro/AboutContactIntro'
const AboutHeader = () => {

    const img = 'https://images.unsplash.com/photo-1530819568329-97653eafbbfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2065&q=80'
    const span = 'About'
    const title = 'Your team of professionals'
    const p = "So fowl signs bring fruit image. Creeping all from bring good you'll have all him moveth them doesn't in appear you two, he that. Days called third had own there sea dominion fowl brought bring male. Morning together, beast you blessed dry fruit brought dry, let fish saying. Earth was male bring very wherein, fly seed. Fly us every can't. In deep saying third. Saw."

    return (
        <div className='about-header'>
            <AboutContactIntro 
            img = {img}
            title={title}
            p={p}
            span={span}
            classname={""}
            ></AboutContactIntro>
        </div>
    )
}

export default AboutHeader
