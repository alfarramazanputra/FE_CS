import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./fragments/Card";
import SceletonC from "./fragments/SceletonC";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(`${import.meta.env.VITE_API_KEY}`);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/portfolio`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setPortfolio(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, [token]);

  const truncateString = (str, num) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat relative pb-10" style={{backgroundImage: "linear-gradient(to left, rgba(95, 145, 255, 0.7), rgba(0, 0, 139, 0.9)), url('/image/building.png')"}}>
      <div className="pt-10 pb-10 lg:pl-10">
        <div className="mx-10">
          <h1 className="text-3xl font-bold text-white mb-10">Portfolio</h1>
          <a href="/portfolio" className="bg-white rounded-md font-semibold text-blue-900 px-4 py-2 absolute top-10 right-10 transition duration-300 ease-in-out hover:bg-gray-300 hover:text-white">See More</a>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-12 gap-3 justify-center items-center">
            {loading ? (
              // batas
             <SceletonC/>
              // batas
            ) : error ? (
              <p> <SceletonC/></p>
            ) : portfolio.length > 0 ? (
              portfolio.map((item, index) => (
                <Card
                  key={index}
                  CardTitle={item.title}
                  CardImage={item.image}
                  CardDescription={item.software_name}
                  // truncateString(item.description, 50)
                  />
              ))
            ) : (
              <p>No data available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
