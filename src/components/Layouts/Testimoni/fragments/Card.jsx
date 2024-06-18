import Aos from "aos";
import React, { useEffect } from "react";

const Card = (props) => {
  const { CardName, CardPosition, CardDescription, CardImage } = props;
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className="flex justify-center " data-aos="flip-up" data-aos-anchor-placement="top-center">
      <div className="flex justify-center  pt-10 mb-10">
        <div className="bg-blue-100 aspect-[3/4] max-w-xs min-w-11 overflow-visible rounded-md">
          <div className="">
            <img
              src={`https://casatech.id/compro-api/${CardImage}`}
              className="bg-blue-700 p-1 rounded-full w-1/2 aspect-square object-cover mx-auto mt-[-10%] relative"
              alt=""
            />
          </div>
          <div className="h-1/2 mt-5">
            <div className="px-4 h-[13rem] overflow-y-auto scrollbar scrollbar-thumb-slate-900 scrollbar-track-blue-100">
              <p dangerouslySetInnerHTML={{ __html: CardDescription }}></p>
            </div>
          </div>
          <div>
            <h1 className="text-center font-semibold text-xl mx-5">
              {CardName}
            </h1>
            <h1 className="text-center font-semibold text-md">
              {CardPosition}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
