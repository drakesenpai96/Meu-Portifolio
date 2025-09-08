import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react"

import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
// import About from './components/About'
// import Works from './components/Works'

import Works from './components/Works'
import Contacts from './components/Contacts'


import './App.css'

function App() {

  return (<>
    <main>
      <NavBar></NavBar>
      <Intro></Intro>
      <About></About>
      <Works></Works>
      <Contacts></Contacts>
    </main>
  </>)

}

export default App
