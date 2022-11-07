import React from 'react'
import CCarousel from './CCarousel'
import Portfolio from './Portfolio';
import "./Home.css"
import { motion } from "framer-motion";
import { animation1, transition } from "./Animation";
function Home() {
  return (
    <>
      <motion.div
        className='main'
        initial="out"
        animate="in"
        exit="out"
        variants={animation1}
        transition={transition}
      >
      <CCarousel/>
      <Portfolio/>
      </motion.div>
    </>
  )
}

export default Home