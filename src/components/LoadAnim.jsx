import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const LoadAnim = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} spin className='text-3xl' />
    </div>
  )
}

export default LoadAnim
