import React from 'react'
import ContactHeader from './Subsections/ContactHeader/ContactHeader'
import Details from './Subsections/Details/Details'
import Map from './Subsections/Map/Map'
import Form from './Subsections/Form/Form'
import './Contact.css'
const Contact = () => {
    return (
        <div className='contact-page'>
            <ContactHeader></ContactHeader>
            <Details></Details>
            <Map></Map>
            <Form></Form>
        </div>
    )
}

export default Contact
