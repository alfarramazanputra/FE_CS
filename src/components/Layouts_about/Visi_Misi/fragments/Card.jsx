import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";

const Card = (props) => {
  useEffect(()=>{
    Aos.init();
  },[])
    const {cardTitle, cardDescription, animation, duration} = props;
  return (
    <div className='w-full lg:w-2/3 mx-auto bg-blue-100 rounded-md my-4' data-aos={animation} data-aos-duration={duration} data-aos-anchor-placement="top-center">
      <p className="p-5 text-md text-center" dangerouslySetInnerHTML={{ __html: cardDescription }}></p>
      <div className='w-full h-20 bg-[#1762EF] rounded-sm text-white flex justify-center items-center'>
        <h1 className='text-center text-2xl font-semibold'>{cardTitle}</h1>
      </div>
    </div>
  )
}

export default Card
