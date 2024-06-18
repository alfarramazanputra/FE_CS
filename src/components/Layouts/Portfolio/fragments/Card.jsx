import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Card = (props) => {
 const { CardTitle, CardDescription, CardImage } = props

  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="card aspect-square max-w-xs max-h-xs relative" data-aos="flip-up" data-aos-anchor-placement="top-center">
    <img
      src={`https://casatech.id/compro-api/${CardImage}`}
      alt=""
      className="object-cover w-full h-full"
    />
    <div className="z-10 bg-white shadow-2xl  mx-4 absolute bottom-[-10%] left-0 right-0 p-4 flex flex-col justify-center items-center font-mono font-semibold text-blue-900">
      <h1 className="text-center mb-2">{CardTitle}</h1>
      <h1 className="text-center" dangerouslySetInnerHTML={{ __html: CardDescription }}></h1>
      
    </div>
  </div>
  )
}

export default Card
