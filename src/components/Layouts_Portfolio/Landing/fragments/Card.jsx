import React from "react";

const Card = (props) => {
  const { CardTitle, CardDescription, CardImage, CardAmount, CardSoftware } = props;
  return (
    <div className="flex justify-center mb-10">
      <div className="md:mx-8 mx-10 lg:max-w-[100vh] md:max-w-[100vh] grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 bg-blue-100 rounded-lg">
  <div className="flex justify-center">
  <img src={`https://casatech.id/compro-api/${CardImage}`} className="aspect-square " alt="" />
  </div>
        <div className="p-5">
          <h1 className="text-xl lg:text-2xl font-semibold">{CardTitle}</h1>
          <h1 className="text-xl lg:text-2xl font-semibold text-blue-700">
            {CardSoftware}
          </h1>
          <div className="md:text-md sm:text-sm text-sm lg:text-md overflow-auto">
            <p dangerouslySetInnerHTML={{ __html: CardDescription }}>
              
            </p>
          </div>
          <div className="bg-blue-600 w-1/2 text-center mt-5 rounded-md text-white px-5 py-2">
          <p dangerouslySetInnerHTML={{ __html: CardAmount }}></p>client

          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Card;
