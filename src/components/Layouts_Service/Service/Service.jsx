import React from "react";

const Service = () => {
  return (
    <div className="flex items-center justify-center w-full px-10 py-10 mt-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1">
      <div className="text-3xl font-bold font-mono flex flex-col justify-center">
        <h1 className="text-blue-700 text-5xl">Service</h1>
        <h1>This is a service that can be carried out by us</h1>
      </div>
      <div className="flex justify-center">
        <img
          src="/image/company_1.png"
          alt=""
          className="object-cover w-1/2 mt-10" 
        />
        <img
          src="/image/company_1.png"
          alt=""
          className="object-cover w-1/2 " 
        />
      </div>
    </div>
  </div>
  );
};

export default Service;
