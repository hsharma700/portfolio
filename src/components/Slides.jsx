import React, { useEffect, useState } from "react";
import {TiChevronLeftOutline,TiChevronRightOutline} from "react-icons/ti";


function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    console.log(slides);
    const lastSlide = currentIndex === slides.length - 1;
    const increement = setInterval(() => {
      const newSlide = lastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newSlide);
    }, 5000);
    return () => {
    
      clearInterval(increement);
    };
  }, [currentIndex,slides]);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex]?.url})`,
    width: "100%",
    height: "100%",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundPosition: "center",
    backgroundSize: "cover",
    transition: "0.5s",
    position:'relative'
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    left: "50px",
    transform: "translate(0,-50%)",
    zIndex: 1,
    cursor: "pointer",
    fontSize: "32px",
    color: "#fff",
    fontWeight: 600,
  };
  const rightArrowStyles = {
    position: "absolute",
    right: "50px",
    top: "50%",
    transform: "translate(0,-50%)",
    zIndex: 1,
    cursor: "pointer",
    fontSize: "32px",
    color: "#fff",
    fontWeight: 600,
  };

  const goPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const dotContainer = {
    zIndex:2,
    position:'absolute',
    top:'90%',
    transform:'translate(-50%, -50%)',
    left:'50%'
  };

  const dotDiv={
    display:'flex',

  }

  const dotStyles = {
    
    fontWeight: "bolder",
    cursor: "pointer",
  };

  const goToSlide = (slide) => {
    setCurrentIndex(slide);
  };

  const dotClick = {
    border: "2px solid black",
    backgroundColor: "white",
    borderRadius: "50%",
    height: "12px",
    width: "12px",
    scale:'1.5',
    margin: "10px",
  };
  const dotUnClicked = {
    border: "2px solid white",
    borderRadius: "50%",
    height: "12px",
    width: "12px",
    margin: "10px",
  };

  return (
    <>
      {slides && slides.length > 0 && (
        <div style={sliderStyles}>
          <div style={leftArrowStyles} onClick={goPrevious}>
            <TiChevronLeftOutline/>
          </div>
          <div style={rightArrowStyles} onClick={goNext}>
            <TiChevronRightOutline/>
          </div>
          <div style={dotContainer}>
            <div style={dotDiv}>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                style={dotStyles}
                onClick={() => goToSlide(slideIndex)}
              >
                {slideIndex === currentIndex ? (
                  <div style={dotClick}></div>
                ) : (
                  <div style={dotUnClicked}></div>
                )}
              </div>
            ))}
            </div>
          </div>
          <div style={slideStyles}>
            <h5 className="carTitle">{slides[currentIndex]?.title}</h5>
          </div>
        </div>
      )}
    </>
  );
}

export default ImageSlider;
