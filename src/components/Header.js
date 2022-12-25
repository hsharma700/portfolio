import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
import Navbar from "./Navbar";
import Tech6 from "./assets/videos/tech6.mp4"

function Header() {
  const navigate = useNavigate();
  const Llogin = (path) => {
    navigate(path);
  };
  return (
    <>
      <div className="Header">
        
      <video playsInline muted autoPlay loop id="bgVideo">
        <source src={Tech6} type="video/mp4"/>
        </video>
        <div className="sitename">
          <motion.div
            initial={{opacity:0, y:-100}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
           className="profile">
            <Link className="Link L1" to={"/"}>
              Himanshu Sharma
            </Link>
          </motion.div>
          
        </div>
{/* 
        <motion.div
            initial={{opacity:0, y:-100}}
            animate={{opacity:1,y:0}}
            exit={{opacity:0}}
            transition={{duration:0.5}}
        
        className="logreg">
          <div className="btn">
            <button className="log" onClick={() => Llogin("/login")}>
              Login
            </button>
            <button className="reg" onClick={() => Llogin("./register")}>
              Register
            </button>
          </div>
        </motion.div> */}
        <Navbar/>
      </div>
    </>
  );
}

export default Header;
