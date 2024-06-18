import { useState, useEffect } from "react";
import Card from "./fragments/Card";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
const Culture = () => {
  const [Culture, setCulture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [token, setToken] = useState(
    `${import.meta.env.VITE_API_KEY}`
  );

  useEffect(() => {
    const fetchCulture = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/culture`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setCulture(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCulture();
  }, [token]);

  return (
    <div>
      <h1 className="text-3xl font-mono font-semibold text-center mb-10">
        This is the <span className="text-blue-800">work culture</span> we
        usually do in the <span className="text-blue-800">office</span>
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
 <div className="">
               {loading ? (
                <p>loading</p>
              ) : error ? (
                <p>Error: {error.message}</p>
              ) : Culture.length > 0 ? (
                Culture.map((culture, index) => (
                  <SwiperSlide>
                  <Card
                    key={index}
                    title={culture.tittle_culture}
                    image={culture.image}
                    description={culture.description_culture}
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
};

export default Culture;
