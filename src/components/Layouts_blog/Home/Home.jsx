import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Home = () => {
  return (
    <div
      className="h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage:
          "linear-gradient(to left, rgba(95, 145, 255, 0.7), rgba(0, 0, 139, 0.9)), url('/image/building.png')",
      }}
    >
      <div className="flex flex-col items-center ">
        <img src="/image/whiteLogo.png" alt="" className="mb-4 " />
        <h1 className="text-white text-3xl font-semibold">Casatech Blogs</h1>
        <p className="text-white text-lg">Home/Blog</p>
        {/* <div className="flex">
          <input
            type="text"
            className="appearance-none w-full max-w-md bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
            placeholder="search ....."
          />
          <button
            type="button"
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:bg-blue-600"
          >
           <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
