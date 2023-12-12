import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import WhatWeDo from './Components/WhatWeDo'
import SuccessStories from './Components/SuccessStories'
import Hero from './Components/Hero'


function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <WhatWeDo/>
    <SuccessStories/>
    <Footer/>
    </>
  )
}

export default App
