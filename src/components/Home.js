import React from "react";
// import CCarousel from './CCarousel'
import Portfolio from "./Portfolio";
import "./Home.css";
import { motion } from "framer-motion";
import { animation1, transition } from "./Animation";
import Carousel from "./Carousel2";
// import Tech2 from "./assets/tech2.jpg";
function Home() {
  return (
    <>
      <motion.div
        className="main"
        initial="out"
        animate="in"
        exit="out"
        variants={animation1}
        transition={transition}
      >
        
        <Carousel />
        <Portfolio />
        {/* <img className="homeBg1" src={Tech2} alt=''/> */}
      </motion.div>
    </>
  );
}

export default Home;
