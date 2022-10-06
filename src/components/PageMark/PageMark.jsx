import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router'

import './PageMark.css'
const PageMark = () => {

    const location = useLocation()
    const path = location.pathname.split("/")[1]
    
    const [pageName, setPageName] = useState('Home')

    useEffect(() => {
        if(path === '') {
            setPageName('Home')
        } else if (path === 'portfolio') {
            setPageName('portfolio')
        } else if (path === 'about') {
            setPageName('about')
        } else if (path === 'contact') {
            setPageName('contact')
        }
    }, [path])

    return (
        <div>
            <div className='page-mark'>
                <div className='line'></div>
                 <p className='page-name'>{pageName}</p>
            </div>
        </div>
    )
}

export default PageMark
