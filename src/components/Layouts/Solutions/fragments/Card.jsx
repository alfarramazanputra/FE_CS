import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = (props) => {
  const { CardTitle, CardDescription, CardImage } = props;
  
  useEffect(() => {
    Aos.init();
  }, []);
  
  return (
    <div className="p-4 max-w-xs my-10  text-white flex flex-col items-center justify-center" data-aos="fade-up-right">
      <div className="aspect-square flex flex-col items-center justify-center">
        <div className="flex items-center justify-center bg-white rounded-full w-max h-max p-10">
          <img src={`https://casatech.id/compro-api/${CardImage}`} alt="" className="w-[100px] object-cover aspect-square " />
        </div>
        <h2 className="lg:text-2xl font-semibold mb-2 text-center">{CardTitle}</h2>
        <p className="mt-2 text-sm md:text-sm font-thin text-center" dangerouslySetInnerHTML={{ __html: CardDescription }}>
        </p>
      </div>
    </div>
  );
};

export default Card;
