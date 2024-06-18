import React from 'react'

const CardTestimo = (props) => {
  const {CardColor = "bg-white",
     CardText = "text-black",
     CardSum, CardType
    } = props;
  return (
   <div className={`w-20 lg:w-[10rem] md:w-15 aspect-square ${CardColor} ${CardText} text-center p-2 rounded-br-xl  rounded-tl-xl flex flex-col justify-center`}>
    <p className="text-xs md:text-sm">Up To</p>
    <h1 className="text-lg md:text-2xl font-bold">{CardSum}</h1>
    <p className="text-xs md:text-sm">{CardType}</p>
  </div>
  )
}

export default CardTestimo
