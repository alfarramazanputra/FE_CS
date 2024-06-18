import Card from "./fragments/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { EffectFade } from "swiper/modules";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SceletonC from "./fragments/SceletonC";

const Innovation = () => {
  const [innovation, setInnovation] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(
   `${import.meta.env.VITE_API_KEY}`
  );

  useEffect(() => {
    const fetchInnovation = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/innovation`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setInnovation(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchInnovation();
  }, [token]);

  return (
    <div>
      <h1 className=" lg:ml-10 lg:absolute lg:mt-[5rem] ml-0 text-center text-[#1762EF] text-3xl font-bold ">
        Our Innovation
      </h1>
      <div className=" h-screen flex justify-center items-center">
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
          spaceBetween={50}
          className=""
          autoplay={{ delay: 3000 }}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {" "}
          <div className="">
            {" "}
            <div className="slider-container">
              <div className="">
                <div>
                  {loading ? (
                   
                    <SceletonC/>
                  ) : 
                  error ? (
                    <p> <SceletonC/></p>
                  ) : innovation.length > 0 ? (
                    innovation.map((innovation, index) => (
                      <SwiperSlide>
                        <Card
                          key={index}
                          CardTitle={innovation.tittle}
                          CardImage={innovation.image}
                          CardDescription={innovation.description}
                          CardDate={innovation.created_at}
                        />
                      </SwiperSlide>
                    ))
                  ) : (
                    <p>No data available</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Innovation;
