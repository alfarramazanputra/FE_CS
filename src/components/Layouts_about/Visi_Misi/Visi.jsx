import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import Card from "./fragments/Card";
import axios from "axios";
import SceletonC from "./fragments/SceletonC";

const Visi = () => {
  const [visi, setVisi] = useState("");
  const [misi, setMisi] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State for loading status
  const [error, setError] = useState(null); // State for storing any errors
  const token =
    `${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    fetchData();
    Aos.init();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/company`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setVisi(response?.data?.data?.[0]?.visi);
      setMisi(response?.data?.data?.[0]?.misi);
      setIsLoading(false);
    } catch (error) {
      setError("Error fetching data");
      setIsLoading(false);
      
    }
  };

  return (
    <div className="mt-10 lg:h-screen flex flex-col justify-center items-center">
      <h1
        className="text-center text-4xl font-bold"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
      >
        <span className="text-[#1762EF]">Visi & Misi</span> Casatech
      </h1>

       
      {error && <p>{error}</p>}
      {isLoading ? (
       <SceletonC/>
      ) : (
        <div className="grid lg:grid-cols-2 md:grid-cols-1 w-10/12 mx-auto mt-10">
          <Card
            cardTitle="Visi"
            cardDescription={visi}
            animation="fade-right"
            duration="900"
          />
          <Card
            cardTitle="Misi"
            cardDescription={misi}
            animation="fade-left"
            duration="900"
          />
        </div>
      )}
    </div>
  );
};

export default Visi;
