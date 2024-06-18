import React from 'react'

const Card = (props) => {
  const { title, description, image } = props
  return (
    <div className="rounded overflow-hidden flex flex-col max-w-xl mx-auto">
          <div>
            <img
              className="w-full aspect-video object-cover"
              src={`https://casatech.id/compro-api/${image}`}
              alt="Meeting"
            />
          </div>
          <div className="relative -mt-16 px-10 pt-5 pb-16 bg-white shadow-lg m-10">
            <span className="font-semibold text-lg  hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
           {title}
            </span>
            <p className="text-gray-500 lg:text-sm md:text-sm sm:text-sm text-[10px] h-1/2 overflow-auto" dangerouslySetInnerHTML={{ __html: description }}>
             
            </p>
            
          </div>
        </div>
  )
}

export default Card
