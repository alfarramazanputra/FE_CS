
import React from 'react'

const Card = (props) => {
    const { title, description, image } = props
  return (
    <>
    <div class="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src={`https://casatech.id/compro-api/${image}`} />
    <div class="mt-8">
        <h4 class="font-bold text-xl">{title}</h4>
        <p class="mt-2 text-gray-600" dangerouslySetInnerHTML={{__html : description}}>
        </p>
        
    </div>
</div>
    </>
  )
}

export default Card
