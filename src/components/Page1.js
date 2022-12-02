/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Page1.css";
import Loader from "./Loader";

function Page1() {
  const [isloading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <>
      <div className="resume">
        {isloading ? (
          <Loader />
        ) : (
          <div className="doc">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
              }}
              className="resumediv"
            >
                      

  


            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}

export default Page1;
