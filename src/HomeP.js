import React from 'react'
import Nav from './component/Nav'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Trainer from './component/Trainer'
import Footer from './component/Footer'
function HomeP() {
    return (
        <>
            <Nav/>
            <Home/>
            <About/>
            <Services/>
            <Trainer/>
            <Footer/>
        </>
    )
}

export default HomeP
