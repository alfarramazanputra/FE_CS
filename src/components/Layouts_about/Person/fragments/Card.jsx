import React from 'react'

const Card = (props) => {
  const {CardImage, CardName, CardPosition} = props
  return (
    <div className="bg-blue-600 rounded-t-[100px] w-[200px] h-[300px] px-[20px] text-center text-[#585DF5] font-bold">
            <div>
              <img
                src={`https://casatech.id/compro-api/${CardImage}`}
                alt=""
                className="filter drop-shadow-lg"
              />
             
              <div className="position bg-white px-[10px] py-[5px] rounded-[3px] shadow-xl mt-[10px]">
                {CardName}
                <br />
                {CardPosition}
              </div>
            </div>
          </div>
  )
}

export default Card
