import React from 'react'

import './Leaders.css'
const Leaders = () => {
    return (
        <div className="leaders">
            <h2 className='leaders-title'>The Leaders</h2>
            <div className="leaders-card-container">
                <div className="leader">
                    <div className="leader-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className="leader-img jake" />
                    </div>
                    <h4 className="leader-name">Jake Richards</h4>
                    <p className="leader-info">Chief Architect</p>
                </div>
                <div className="leader">
                    <div className="leader-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1618754580230-dc55ba127aa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className="leader-img" />
                    </div>
                    <h4 className="leader-name">Lisa Raurke</h4>
                    <p className="leader-info">Interior Designer</p>
                </div>
                <div className="leader">
                    <div className="leader-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80" alt="" className="leader-img maria" />
                    </div>
                    <h4 className="leader-name">Maria Simpson</h4>
                    <p className="leader-info">Sales and Finance Manager</p>
                </div>
                <div className="leader">
                    <div className="leader-img-wrapper">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" alt="" className="leader-img tom" />
                    </div>
                    <h4 className="leader-name">Thompson Smith</h4>
                    <p className="leader-info">Product Manager</p>
                </div>
            </div>
        </div>
    )
}

export default Leaders
