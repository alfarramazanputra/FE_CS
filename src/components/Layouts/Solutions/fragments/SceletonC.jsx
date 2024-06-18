import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SceletonC = () => {
  return (
    <div className="p-4 max-w-xs my-10 text-white ">
                  <div className="aspect-square">
                    <div className="flex items-center justify-center bg-gray-300 animate-pulse rounded-full w-max h-max p-10">
                      <FontAwesomeIcon
                        icon={faWallet}
                        className="text-gray-300 text-3xl md:text-7xl animate-pulse"
                      />
                    </div>
                    <h2 className="lg:text-2xl font-semibold mb-2 mt-4">
                    <div class="h-4 bg-gray-300 rounded animate-pulse"></div>
                    </h2>
                    <p className="mt-2 text-sm md:text-sm font-thin">
                      <div class="animate-pulse space-y-4">
                        <div class="h-4 bg-gray-300 rounded w-2/3"></div>
                        <div class="h-4 bg-gray-300 rounded"></div>
                        <div class="h-4 bg-gray-300 rounded"></div>
                        <div class="h-4 bg-gray-300 rounded w-1/2"></div>
                       
                      </div>
                    </p>
                  </div>
                </div>
  )
}

export default SceletonC
