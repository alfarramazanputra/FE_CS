import React, { useState, useEffect } from "react";
import Card from "./fragments/Card";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet } from "@fortawesome/free-solid-svg-icons";
import SceletonC from "./fragments/SceletonC";

const Solutions = () => {
  const [solutions, setSolutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(
    `${import.meta.env.VITE_API_KEY}`
  );

  useEffect(() => {
    const fetchSolutions = async () => {
      try {
        const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/solution`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSolutions(response.data.data); 
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchSolutions();
  }, [token]);

  return (
    <>
      <div
        className="bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to left, rgba(95, 145, 255, 0.7), rgba(0, 0, 139, 0.9)), url('/image/building.png')",
        }}
      >
        <div className=" pt-10 pb-10 lg:pl-10">
          <div className="mx-10">
            <h1 className="text-3xl font-bold text-white mb-10">Solution</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-12  gap-3 justify-center items-center">
              {loading ? (
                <div>
                  <SceletonC/>
                 
                </div>
              ) : error ? (
                <p><SceletonC/></p>
              ) : solutions.length > 0 ? (
                solutions.map((solution, index) => (
                  <Card
                    key={index}
                    CardTitle={solution.title}
                    CardDescription={solution.description}
                    CardImage={solution.image}
                  />
                ))
              ) : (
                <p>No solutions found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
