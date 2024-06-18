import React from "react";

const SceletonC = () => {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 w-10/12 mx-auto mt-10">
      <div className="w-full  lg:w-2/3 mx-auto bg-gray-300 rounded-md my-4 animate-pulse">
        <div className=" text-gray-400 animate-pulse space-y-4 px-5 py-4">
          <p className="bg-gray-400 rounded-md">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="bg-gray-400 rounded-md">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="bg-gray-400 rounded-md">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="w-full h-20 bg-gray-400 rounded-sm  flex justify-center items-center">
          <h1 className="text-center text-2xl font-semibold">
            <p className="bg-gray-200 rounded-md text-gray-200">Lorem </p>
          </h1>
        </div>
      </div>
      <div className="w-full  lg:w-2/3 mx-auto bg-gray-300 rounded-md my-4 animate-pulse">
        <div className=" text-gray-400 animate-pulse space-y-4 px-5 py-4">
          <p className="bg-gray-400 rounded-md">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="bg-gray-400 rounded-md">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="bg-gray-400 rounded-md">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
        <div className="w-full h-20 bg-gray-400 rounded-sm  flex justify-center items-center">
          <h1 className="text-center text-2xl font-semibold">
            <p className="bg-gray-200 rounded-md text-gray-200">Lorem </p>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SceletonC;
