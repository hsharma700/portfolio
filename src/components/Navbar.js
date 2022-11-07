import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
import {motion} from "framer-motion"
export default function Navbar() {
  return (
    <>
        <div className='Navbar'>
        <motion.div
        initial={{opacity:0,x:-300}}
        animate={{opacity:1,x:0}}
        exit={{opacity:0}}
        transition={{duration:1}}
        className="page">
            <Link className="link l1" to={"/page1"}>
              Resume
            </Link>
            <Link className="link l2" to={"/page2"}>
              Websites
            </Link>
            <Link className="link l3" to={"/About"}>
              About Me
            </Link>
          </motion.div>
        </div>

    </>
  )
}
