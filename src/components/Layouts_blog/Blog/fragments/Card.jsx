import React from 'react'
import { faCalendarDays, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = (props) => {
  const { CardTitle, CardDescription, CardDate, CardImage } = props;

  return (
    <div className="bg-[#F4F8FF] aspect-[4/3] rounded-md lg:w-full md:w-full sm:w-full w-[50vh]">
      <div className=''>
        <img src={`https://casatech.id/compro-api/${CardImage}`} alt="" className='w-full aspect-video object-cover' />
      </div>
      <h1 className="text-2xl my-5 font-semibold ml-5">{CardTitle}</h1>
      <div className="text-blue-700 text-sm flex ml-5 mb-3">
        
        <div className="flex">
          <FontAwesomeIcon icon={faCalendarDays} style={{ color: "#2071fe" }} className="self-center mr-1 " />
          <p>{CardDate}</p>
        </div>
      </div>
      <div className="h-1/2 mx-5 my-4 overflow-auto px-5 scrollbar scrollbar-thumb-slate-900 scrollbar-track-[#F4F8FF]">
        <p dangerouslySetInnerHTML={{ __html: CardDescription }}></p>
      </div>
    </div>
  )
}

export default Card
