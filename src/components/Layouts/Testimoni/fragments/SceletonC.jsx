import React from 'react'

const SceletonC = () => {
  return (
    <div className="flex justify-center ">
    <div className="flex justify-center  pt-10 mb-10">
      <div className="bg-gray-300 aspect-[3/4] max-w-xs min-w-11 overflow-visible rounded-md">
        <div className="">
          <div className="bg-gray-200 p-1 rounded-full w-1/2 aspect-square object-cover mx-auto mt-[-10%] relative"></div>
        </div>
        <div className="h-1/2 mt-5">
          <div className="px-4 h-[13rem] overflow-y-auto scrollbar scrollbar-thumb-slate-900 scrollbar-track-blue-100">
            <div className=" text-gray-400 animate-pulse space-y-4">
              <p className="bg-gray-400 rounded-md">Lorem ipsum dolor sit amet consectetur</p>
              <p className="bg-gray-400 rounded-md">Lorem ipsum dolor sit amet consectetur</p>
              <p className="bg-gray-400 rounded-md">Lorem ipsum dolor sit amet consectetur</p>
              <p className="bg-gray-400 rounded-md">Lorem ipsum dolor sit amet consectetur</p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center font-semibold text-xl mx-5 text-gray-400 ">
           <span className="bg-gray-400 rounded-md">lorem ipsum</span>
          </h1>
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default SceletonC
