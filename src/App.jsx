import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from "motion/react"

import NavBar from './components/NavBar'
import Intro from './components/Intro'
import About from './components/About'
import Works from './components/Works'

import './App.css'

function App() {
  const ref = useRef(null);
   
  // progresso do scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // scroll inicial
  const h1Y = useTransform(scrollYProgress, [0.65, 0.85], [0, 400]);
  const h1Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9], [1, 1, 1]);
  
  // conteúdo do meio
  const contentOpacity = useTransform(scrollYProgress, [0.32, 0.35], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.25, 0.4], [50, 0]);
  
  const h12Y = useTransform(scrollYProgress, [0.01, 0.35], [0, 100]);
  const h12Opacity = useTransform(scrollYProgress, [0.65, 0.75, 0.9], [1, 1, 1]);

  // conteúdo do meio
  const content1Opacity = useTransform(scrollYProgress, [0.7, 0.95], [0, 1]);
  const content1Y = useTransform(scrollYProgress, [1, 1.5], [0, 150]);

  // última seção → título preso e conteúdo vindo de baixo
  const lastTitleY = useTransform(scrollYProgress, [0.65, 0.85], [0, 200]);
  const lastTitleOpacity = useTransform(scrollYProgress, [0.65, 0.85], [1, 1]);

  const lastContentY = useTransform(scrollYProgress, [0.7, 0.9], [200, 0]); // de baixo pra cima
  const lastContentOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);


  return (
    <div ref={ref}>
      <NavBar></NavBar>
      <Intro></Intro>


      <section className="relative h-[650px] flex items-center justify-center">
        <motion.div
          style={{ y: h1Y, opacity: h1Opacity }}
          className="sticky top-1/3 text-center"
        >
          <h1 className="about-title">About</h1>
        </motion.div>
      </section>

      {/* Seção 2 */}
      <section className="h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity: contentOpacity, y: contentY }}
        >
          <About></About>
        </motion.div>
      </section>

      <section className="relative h-[650px] flex items-center justify-center">
        <motion.div
          style={{ y: h12Y, opacity: h12Opacity }}
          className="sticky top-1/3 text-center"
        >
          <h1 className="about-title">Works</h1>
        </motion.div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <motion.div
          style={{ opacity: content1Opacity, y: content1Y }}
        >
          <Works></Works>
        </motion.div>
      </section>

    </div>
  )
}

export default App
