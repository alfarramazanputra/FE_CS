import React from 'react'

const SceletonC = () => {
  return (
    <div className="bg-gray-300 animate-pulse aspect-[4/3] rounded-md lg:w-full md:w-full sm:w-full w-[50vh]">
    <div className=''>
      <div className="w-full aspect-video bg-gray-500 animate-pulse"></div>
    </div>
    <p className="text-2xl my-5 font-semibold ml-5 text-gray-400">
      <p className="bg-gray-400 rounded-md w-1/2">.....</p>
    </p>
    <div className="text-gray-400 text-sm flex ml-5 mb-3">
      
      <div className="flex ">
       
        <p className="bg-gray-400 rounded-md ">date</p>
      </div>
    </div>
    <div className="h-1/2 mx-5 my-4 overflow-auto px-5 scrollbar scrollbar-thumb-slate-900 scrollbar-track-[#F4F8FF] text-gray-400 " >
      <p className="bg-gray-400 rounded-md mb-2" >Lorem ipsum dolor sit amet</p>
      <p className="bg-gray-400 rounded-md mb-2" >Lorem ipsum dolor sit amet</p>
      <p className="bg-gray-400 rounded-md mb-2" >Lorem ipsum dolor sit amet</p>
    </div>
  </div>
  )
}

export default SceletonC
