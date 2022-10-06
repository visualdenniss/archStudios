import React from 'react'
import {HiOutlineArrowRight} from 'react-icons/hi'
import './Details.css'
const Details = () => {
    return (
        <div className='contact-details'>
            <div className="separator-line"></div>
            <h2>Contact Details</h2>
            <div className="address-cards">
                <div className="address-card">
                    <div className="address-item">
                    <div className="address-title">
                        Main Office
                    </div>
                    <div className="address-content">
                        <p className="mail">Mail:   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      archone@mail.com</p>
                        <p className="address-info">Adress: 
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1890 Chenoweth Drive TN</p>
                        <p className="phone">Phone:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 123-456-3451</p>
                    </div>
                    </div>
                    <div className="address-link">
                        <a href="">
                            View on Map
                            <HiOutlineArrowRight className='arrow'></HiOutlineArrowRight>
                        </a>
                    </div>
                </div>
                <div className="address-card">
                    <div className="address-item">
                        <div className="address-title">
                            Office II
                        </div>
                        <div className="address-content">
                            <p className="mail">Mail: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; archtwo@mail.com</p>
                            <p className="address-info">Adress: 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            3399 Wines Lane TX</p>
                            <p className="phone">Phone 
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;832-123-4321</p>
                        </div>
                    </div>
                    <div className="address-link">
                    <a href="">
                            View on Map
                            <HiOutlineArrowRight
                            className='arrow'></HiOutlineArrowRight>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details
