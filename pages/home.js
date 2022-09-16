import React from 'react'
import AboutNITS from '../components/sections/AboutNITS/AboutNITS'
import About from '../components/sections/AboutUs/About'
import MainModule from '../components/sections/MainModule/Index'
import Slide from "../components/sections/Slide/Slide"

const Home = () => {
  return (
      <div>
          <About />
          <AboutNITS />
          <MainModule />
          <Slide />
    </div>
  )
}

export default Home