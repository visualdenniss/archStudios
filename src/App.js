import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar/Navbar'
import PageMark from './components/PageMark/PageMark'
import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
const App = () => {
    return (
        <Router>
        <div className="app">
            <PageMark></PageMark>
            <Navbar></Navbar>
            <Routes>
                <Route exact path='/' element={<Home></Home>}></Route>
                <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
                <Route path='/about' element={<About></About>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
            </Routes>
            <Footer></Footer>
        </div>
        </Router>
    )
}

export default App

