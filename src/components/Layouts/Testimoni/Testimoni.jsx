import React, { useEffect, useState } from "react";
import Card from "./fragments/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import axios from "axios";
import SceletonC from "./fragments/SceletonC";

function SimpleSlider() {
  const [testimoni, setTestimoni] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token =`${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    const fetchTestimoni = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/testimoni`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTestimoni(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchTestimoni();
  }, [token]);

  return (
    <div>
      <h1 className="mt-7 text-center lg:text-left lg:m-10 text-3xl text-blue-900 font-semibold mb-10">
        Testimony
      </h1>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        className=""
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        <div className="slider-container">
          {loading ? (
           
            <div>
              <SwiperSlide>
             <SceletonC></SceletonC>
            </SwiperSlide>
            <SwiperSlide>
             <SceletonC></SceletonC>
            </SwiperSlide>
            <SwiperSlide>
             <SceletonC></SceletonC>
            </SwiperSlide>
            <SwiperSlide>
             <SceletonC></SceletonC>
            </SwiperSlide>
            </div>
          ) : 
          error ? (
            <p><div>
            <SwiperSlide>
           <SceletonC></SceletonC>
          </SwiperSlide>
          <SwiperSlide>
           <SceletonC></SceletonC>
          </SwiperSlide>
          <SwiperSlide>
           <SceletonC></SceletonC>
          </SwiperSlide>
          <SwiperSlide>
           <SceletonC></SceletonC>
          </SwiperSlide>
          </div>
              Error: {error.message}</p>
          ) : testimoni.length > 0 ? (
            testimoni.map((Testimoni, index) => (
              <SwiperSlide key={index}>
                <Card
                  CardImage={Testimoni.image}
                  CardDescription={Testimoni.description}
                  CardName={Testimoni.name}
                />
              </SwiperSlide>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </Swiper>
    </div>
  );
}

export default SimpleSlider;
