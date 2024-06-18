import React from 'react'

const SceletonC = () => {
  return (
    <div className="card aspect-square max-w-xs max-h-xs relative" >
    <div className="h-full w-full bg-gray-300 animate-pulse">

    </div>
     <div className="z-10 bg-gray-300 shadow-2xl  mx-4 absolute bottom-[-10%] left-0 right-0 p-4 flex flex-col justify-center items-center font-mono font-semibold text-gray-400">
       <h1 className="text-center mb-2 bg-gray-400 animate-pulse rounded-md">...........</h1>
       <h1 className="text-center rounded-md bg-gray-400 animate-pulse" >................</h1>
       
     </div>
   </div>
  )
}

export default SceletonC
