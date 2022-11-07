import React, { useState } from "react";
import "./About.scss";
import Loader from "./Loader";

export default function About() {

  const [isloading, setLoading] = useState(true);

  setTimeout(()=>{
    setLoading(false)
  },1000)

  function github() {
    window.open("https://github.com/hsharma700?tab=repositories");
  }

  function linkedin() {
    window.open("https://www.linkedin.com/in/himanshu-sharma-832319234");
  }

  return (
    <>
            

      <div className="aboutDiv">
      {isloading?<Loader />:
        <div id="abbody" className="abbody">
          <div className="abcard">
            <div className="abimgbox">
              <img src="https://drive.google.com/uc?id=1f3eHmg8rAJPgPN5c0THkUvvUZlzwoT_f" />
            </div>
            <div className="abcontent" id="abcontent1">
              <div className="abdetails">
                <h2>Himanshu Sharma</h2>
                <h4>
                  <span className="f1">F</span>
                  <span className="r2">r</span>
                  <span className="o3">o</span>
                  <span className="n4">n</span>
                  <span className="t5">t</span>
                  &nbsp;
                  <span className="e6">E</span>
                  <span className="n7">n</span>
                  <span className="d8">d</span>
                  &nbsp;
                  <span className="d9">D</span>
                  <span className="e10">e</span>
                  <span className="v11">v</span>
                  <span className="e12">e</span>
                  <span className="l13">l</span>
                  <span className="o14">o</span>
                  <span className="p15">p</span>
                  <span className="e16">e</span>
                  <span className="r17">r</span>
                </h4>
                <div className="abdata">
                  <img
                    onClick={github}
                    src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png"
                    alt=""
                  />
                  <img
                    onClick={linkedin}
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
                    alt=""
                  />
                </div>
                <h2 id="abh2" className="abh2">
                  TECHNOLOGIES
                </h2>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>JAVASCRIPT</h3>
                <h3>REACT JS</h3>
              </div>
            </div>
          </div>
        </div>
}
      </div>

    </>
  );
}
