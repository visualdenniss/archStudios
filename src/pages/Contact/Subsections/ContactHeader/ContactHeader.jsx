import React from 'react'

import AboutContactIntro from '../../../../components/AboutContactIntro/AboutContactIntro'
const ContactHeader = () => {
    const img = 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d3JpdGluZyUyMHdpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60'
    const span = 'Contact'
    const title = 'Tell us about your project'
    const p = "We'd love to hear more about your project. Please leave a message below or gives us a call. We have two offices, one in Texas and one in Tenessee. If you find yourself nearby, come say hello!"

    return (
        <div className='contact-header'>
            <AboutContactIntro 
            img = {img}
            title={title}
            p={p}
            span={span}
            classname={"contact-span"}
            ></AboutContactIntro>
        </div>
    )
}

export default ContactHeader
