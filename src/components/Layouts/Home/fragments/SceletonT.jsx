import React from 'react'

const SceletonT = () => {
  return (
    <div
    className={`w-20 lg:w-[10rem] md:w-15 aspect-square  bg-gray-200 animate-pulse text-center p-2 rounded-br-xl  rounded-tl-xl flex flex-col justify-center`}
  >
    <p className="text-xs md:text-sm ">
      <p className="bg-gray-300 w-1/2 mx-auto">..</p>
    </p>
    <h1 className="text-lg md:text-2xl font-bold  mt-1">
      <p className="bg-gray-300 w-1/3 mx-auto">..</p>
    </h1>
    <p className="text-xs md:text-sm">
      <p className="bg-gray-300 w-1/2 mx-auto mt-1">...</p>
    </p>
  </div>
  )
}

export default SceletonT
