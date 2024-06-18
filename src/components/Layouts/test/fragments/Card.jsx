import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = (props) => {
  useEffect(()=>{
    Aos.init();
  },[])
    const { CardTitle, CardDate, CardImage, CardDescription} = props;
  return (
   <div className='flex justify-center items-center mb-10 mx-10'>
    
    <div data-aos="flip-right" className=" bg-blue-100  lg:max-w-3xl  rounded-xl shadow-md overflow-hidden">
    <div className="md:flex">
      <div className="md:shrink-0 h-full">
        <img
          className="w-full  md:w-full lg:w-48 sm:w-full rounded-xl"
          src={`image/${CardImage}`}
          alt="Team"
        />
      </div>
      <div className="p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
         {CardTitle}
        </div>
        
        <div className="mt-2 text-gray-500 overflow-y-auto max-h-20  scrollbar scrollbar-thumb-slate-900 scrollbar-track-blue-100">
         {CardDescription}
        </div>
        <span className="text-blue-600 "><FontAwesomeIcon icon={faCalendarDays} className="text-blue-900 pr-2" />{CardDate}</span>
      </div>
    </div>
  </div>
   
   </div>
  )
}

export default Card
