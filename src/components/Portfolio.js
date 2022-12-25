import React from 'react'
import "./Portfolio.scss"
import Tech1 from "./assets/tech2.jpg";

export default function Portfolio() {

 
    function github(){
        window.open("https://github.com/hsharma700?tab=repositories")
    }

    function linkedin(){
        window.open("https://www.linkedin.com/in/himanshu-sharma-832319234")
    }


  return (
    <>
    <div id='body' className='body'>
       {/* <img className='imgBg1' src={Tech1} alt='' /> */}
    <div className='card'>
        <div className='imgbox'>
            <img src='https://drive.google.com/uc?id=1f3eHmg8rAJPgPN5c0THkUvvUZlzwoT_f'/>
        </div>
        <div className='content' id='content1'>
            <div className='details'>
                <h2>Himanshu Sharma <br/><span>Web Developer</span></h2>
                <div className='data'>
                    <img onClick={github} src="https://pnggrid.com/wp-content/uploads/2022/03/Github-Logo-White.png" alt=""/>
                    <img onClick={linkedin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
