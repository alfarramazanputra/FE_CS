import React from 'react'

const SceletonC = () => {
  return (
    <div className="flex justify-center items-center mb-10 mx-10">
                      <div className=" bg-gray-300 animate-pulse lg:max-w-3xl  rounded-xl shadow-md overflow-hidden">
                        <div className="md:flex">
                          <div className="md:shrink-0 h-full">
                            <div className="w-full bg-gray-400 animate-pulse h-full  md:w-full lg:w-48 sm:w-full aspect-square object-cover rounded-xl"></div>
                          </div>
                          <div className="p-8">
                            <div className="uppercase tracking-wide text-sm animate-pulse rounded-lg text-gray-400 bg-gray-400 w-1/4 font-semibold">
                              title
                            </div>

                            <div className="mt-2 text-gray-400   max-h-20  scrollbar scrollbar-thumb-slate-900 scrollbar-track-blue-100">
                              <p className="mb-1 bg-gray-400 animate-pulse rounded-lg">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo, saepe?
                              </p>
                              <p className="mb-1 bg-gray-400 animate-pulse rounded-lg">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo, saepe?
                              </p>
                              <p className="mb-1 bg-gray-400 animate-pulse rounded-lg">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Quo, saepe?
                              </p>
                            </div>
                            <div className="">
                              <span className="text-gray-400 bg-gray-400 rounded-lg ">
                                ............
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
  )
}

export default SceletonC
