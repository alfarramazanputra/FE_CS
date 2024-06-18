import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../Elements/Button_slide/Button_slide";
import CardTestimo from "./fragments/CardTestimo";
import SceletonT from "./fragments/SceletonT";
import SceletonD from "./fragments/SceletonD";
import Aos from "aos";
import "aos/dist/aos.css";


const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  console.log(import.meta.env.VITE_API_KEY);

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/company`,
          {
            headers: {
              Authorization: "Bearer " + import.meta.env.VITE_API_KEY,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full overflow-x-hidden h-screen lg:h-[10hv] md:h-screen ">
      <img
        className="w-full h-full object-cover md:h-screen"
        src="/image/building.png"
        alt="logo"
      />

      <div className="absolute mt-10 top-10 grid grid-cols-1 items-center md:grid-cols-2">
        <div className="w-auto flex justify-center"></div>

        <div className="w-auto aspect-square text-white mx-10">
          <h1 className="text-2xl mb-10 mt-10 font-bold md:text-4xl lg:text-6xl">
            <span className="text-blue-950">Deep</span> Understanding,
            Inspirational <span className="text-blue-950">Solutions</span>
          </h1>
          {data ? (
            <div>
              {Array.isArray(data.data) ? (
                data.data.map((item) => (
                  <div key={item.id}>
                    <p
                      className="text-sm mb-10 md:text-lg"
                      dangerouslySetInnerHTML={{
                        __html: item.description_company,
                      }}
                    ></p>
                  </div>
                ))
              ) : (
                <p>Data is not an array</p>
              )}
            </div>
          ) : (
            <div>
              <SceletonD />
            </div>
          )}
          {data ? (
            <div>
              {Array.isArray(data.data) ? (
                data.data.map((item) => (
                  <div key={item.id}>
                    <a
                      href={`https://wa.me/${item.no_wa}`}
                      className=""
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button Color="border-white">contact now</Button>
                    </a>
                  </div>
                ))
              ) : (
                <p>Data is not an array</p>
              )}
            </div>
          ) : (
            <div>loading</div>
          )}
          {data ? (
            <div className="">
              {Array.isArray(data.data) ? (
                data.data.map((item) => (
                  <div key={item.id}>
                    <div className="grid grid-cols-3 lg:mt-10 mt-[5rem]">
                      <CardTestimo CardType="Clients" CardSum={item.client} />
                      <CardTestimo
                        CardType="Sponsor"
                        CardColor="bg-blue-950"
                        CardText="text-white"
                        CardSum={item.sponsor}
                      />
                      <CardTestimo CardType="Rating" CardSum={item.rating} />
                      <img src={item.image_about} alt="" />
                    </div>
                  </div>
                ))
              ) : (
                <p>Data is not an array</p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-3 lg:mt-10 mt-[5rem]">
              <SceletonT />
              <SceletonT />
              <SceletonT />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
