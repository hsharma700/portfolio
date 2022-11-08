import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import webapp1 from "../components/assets/webapp1.png";
import webapp2 from "../components/assets/webapp2.png";
import webapp3 from "../components/assets/webapp3.jpeg";
import Loader from "./Loader";

import "./Page2.css";

function Page2() {

  const [isloading, setLoading] = useState(true);

  setTimeout(()=>{
    setLoading(false)
  },1000)


  return (
    <>
      <div className="page2">
      {isloading?<Loader/>:
        <div className="page2indiv">
        <div className="p2title">
        <motion.div
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
              }}>
                <h1 className="p2h1">Websites</h1>
              </motion.div>
        </div>
        <div className="p2main">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: [null, 1.1] }}
              transition={{
                duration: 1,
              }}
              className="webapp"
            >
              <a href="https://hsharma700.github.io/hsharma/" target="blank">
                <img src={webapp1} alt="" />
              </a>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: [null, 1.1] }}
              transition={{
                duration: 1,
              }}
              className="webapp"
            >
              <a href="https://hsharma700.github.io/website1/" target="blank">
                <img src={webapp2} alt="" />
              </a>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -400 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: [null, 1.1] }}
              transition={{
                duration: 1,
              }}
              className="webapp"
            >
              <a href="https://hsharma700.github.io/netflix_clone1/" target="blank">
                <img src={webapp3} alt="" />
              </a>
            </motion.div>
          </div>
        </div>
        </div>
        }
      </div>
    </>
  );
}

export default Page2;
