import React, { useState, useEffect } from "react";
import Card from "./fragments/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade,EffectFlip } from "swiper/modules";
import axios from "axios";


const index = () => {
 
 const [portfolio, setPortfolio] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 const [token, setToken] = useState(`${import.meta.env.VITE_API_KEY}`);

  useEffect(()=>{
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
 

  return (
    <div className="overflow-hidden">
      <h2 className="mt-5 mx-5 lg:text-4xl text-2xl text-center font-semibold ">
        this is an <span className="text-blue-800">aplication</span> we have
        made <span className="text-blue-800">for</span> a{" "}
        <span className="text-blue-800">client</span>
      </h2>
      <div className="my-10 ">
        <Swiper
          modules={[Navigation, Pagination,  A11y, EffectFade, EffectFlip]}
          spaceBetween={50}
          effect="Flip"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {/* fhdsjfhjsj */}

          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error: {error.message}</p>
          ) : portfolio.length > 0 ? (
            portfolio.map((portfolio, index) => (
                <SwiperSlide> <Card 
                key={index}
                CardTitle={portfolio.title}
                CardDescription={portfolio.description}
                CardImage={portfolio.image}
                CardAmount={portfolio.amount}
                CardSoftware={portfolio.software_name}
                />
                </SwiperSlide>
            ))
          ) : (
            <p>No data available</p>
          )}

          {/* fklsajfkl */}
       
         
           
          
        </Swiper>
      </div>
    </div>
  );
};

export default index;
