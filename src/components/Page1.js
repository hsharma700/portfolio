/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { motion } from "framer-motion";
import "./Page1.css";

function Page1() {
  return (
    <>
      <div className="resume">
        <div className="profileimage">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="img"
          >
            <img
              src="https://drive.google.com/uc?id=1f3eHmg8rAJPgPN5c0THkUvvUZlzwoT_f"
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="title"
          >
            <h2>Himanshu Sharma</h2>
            <h2>Web Developer</h2>
            <h2>HTML | CSS | JAVASCRIPT</h2>
            <h2>REACT JS</h2>
            <a className="download" href="https://docs.google.com/document/d/1yn7SPUQHvYhjnlPz8QKTUuIpNZV77BUFFYJJGU6N4rA/edit?usp=sharing" alt="">Download Resume</a>

          </motion.div>
          

        </div>
        <div className="doc">
          <motion.div
          initial={{ opacity: 0, x: 100, }}
          animate={{ opacity: 1, x: 0, }}
          exit={{ opacity: 0 }}
          whileHover={{scale:[null,1.15,1.12]}}
          transition={{
            duration: 0.5,
          }} 
          className="resumediv">
            <iframe
              className="iframe1"
              src="https://docs.google.com/document/d/e/2PACX-1vTZJcKkWDXG7mSU1C74dIkhuEr2yjXpDyTR8WV3_901OlTcV9DV3NRmHYw2bRKMuZruhcBDV10MCsqk/pub?embedded=true"
              scrolling="yes"
            />
        </motion.div>
        </div>
      </div>
    </>
  );
}

export default Page1;
