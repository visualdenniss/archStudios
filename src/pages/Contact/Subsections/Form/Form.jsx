import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'
import './Form.css'
const Form = () => {
    return (
        <div className='contact-form'>
            <h2>Connect with Us</h2>
            <form action="">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message" ></textarea>
                <button className='form-btn' disabled>
                <HiOutlineArrowRight className='submit-arrow'></HiOutlineArrowRight>
                </button>
            </form>
        </div>
    )
}

export default Form
