import React from "react";
import "./CCarousel.css";
import { motion } from "framer-motion";
import {TiChevronLeftOutline,TiChevronRightOutline} from "react-icons/ti";

function CCarousel() {
  return (
    <>
      {/* <div className="home1">
        <div className="div1">
          <img src="assets/img2.jpg" />
          <div className="div2">
            <img src="assets/backward1.png" />
          </div>
          <div className="div3">
            <img src="assets/forward1.png" />
          </div>
        </div>
      </div> */}

      <motion.div
        initial={{ opacity: 0, y:-200 }}
        animate={{ opacity: 1, y:0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="carouselMainDiv"
      >
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
          
            <div className="carousel-item active item1">
           
              <div className="txtdiv txt1">
                <h1>Sample Website</h1>
              </div>
            </div>
            <div className="carousel-item item2">
              <div className="txtdiv txt2">
                <h1>Websites in React js</h1>
              </div>
            </div>
            <div className="carousel-item item3">
              <div className="txtdiv txt3">
                <h1>
                  Checkout Websites Section
                </h1>
              </div>
            </div>
          </div>
          <button
                      style={{fontSize:'60px'}}

            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <TiChevronLeftOutline/>
          </button>
          <button
            style={{fontSize:'60px'}}
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            
            <TiChevronRightOutline/>
          </button>
        </div>
      </motion.div>
    </>
  );
}
export default CCarousel;
