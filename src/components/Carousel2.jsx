import React, { useState } from 'react';
import ImageSlider from './Slides';
import "./Carousel2.scss"

function Carousel2() {

const slides = [
   {url:'https://cdn.pixabay.com/photo/2018/07/12/19/26/integration-3534210_960_720.jpg', title:'SAMPLE WEBSITE'},
   {url:'https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659_960_720.jpg', title:'CHECK OUT WEBSITES SECTION'},
   {url:'https://cdn.pixabay.com/photo/2022/05/18/07/07/laptop-7204537_960_720.jpg', title:'FRONT END DEVELOPER'}
]
// const [sildeSet, setSildeSet] = useState([])

const containerStyles={
    width:'100%',
    height:'400px',
    margin:'0 auto',
}

  return (
    <>
    {/* <button onClick={()=>{const newArray=sildeSet.concat([...slides]);setSildeSet(newArray)}}>add slides</button> */}
    <div className='containerStyles'>
        <div id='' style={containerStyles}>
        <ImageSlider slides={slides}/>
        </div>
    </div>
    </>
  )
}

export default Carousel2