import React from 'react'
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import About from '../Components/about/About';
import Projects from '../Components/Projects';
import Footer from '../Components/Footer';
function Homepage() {
  return (
    <div className='p-0 m-0'>
        <Navbar/>
        <Banner/>
        <About/>
        <Projects/>
        <Footer/>
    </div>
  )
}

export default Homepage
