import Letter from "./fragments/Letter";
import Button from "../../Elements/Button_slide/Button_slide";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadAnim from "../../../components/LoadAnim"
const About = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setIsResponsive(true);
      } else {
        setIsResponsive(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get( `${import.meta.env.VITE_API_URL}/company`, {
          headers: {
            Authorization: 'Bearer ' + import.meta.env.VITE_API_KEY
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={isResponsive ? "h-full flex flex-col justify-center items-center mt-5" : "h-screen flex justify-center items-center"}>
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/2 flex justify-center items-center">
        {data ? (
        <div>
          {Array.isArray(data.data) ? (
            data.data.map(item => (
              <div key={item.id}>
               
                <img
                  src={`https://casatech.id/compro-api/${item.image_about}`}
                  className={isResponsive ? "rounded-br-[50%] object-cover h-full p-4 max-w-xs aspect-square" : "rounded-br-[50%] object-cover h-[70%] p-4 max-w-full aspect-square"}
                  alt="about" data-aos="fade-right" data-aos-duration="2000"
                />
              
              </div>
            ))
          ) : (
            <p>error</p>
          )}
        </div>
      ) : (
        <LoadAnim></LoadAnim>
      )}
          
        </div>
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center" data-aos="fade-left" data-aos-duration="2000">
          <div className="ml-2 md:ml-6 ">
            <h2 className="text-4xl font-bold mb-2 text-blue-950">About Us</h2>
            <Letter />
            <a href="/about">
              <Button >Read More</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
