import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCircleXmark,
  faCopy,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => alert("Email copied to clipboard!"))
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const [isOpenPhone, setIsOpenPhone] = useState(false);
  const openModalPhone = () => setIsOpenPhone(true);
  const closeModalPhone = (e) => {
    e.stopPropagation();  
    setIsOpenPhone(false);
  };

  const copyToClipboardPhone = () => {
    navigator.clipboard
      .writeText(telphone)
      .then(() => alert("phone number copied to clipboard!"))
      .catch((err) => console.error("Failed to copy number: ", err));
  };

  const [youtube, setYoutube] = useState("");
  const [name, setName] = useState("");
  const [instagram, setInstagram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [telphone, setTelphone] = useState("");
  const [map, setMap] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const token =
   `${import.meta.env.VITE_API_KEY}`;

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  const fetchData = async () => {
    try {
      const response = await axios.get(
       `${import.meta.env.VITE_API_URL}/company`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("response data:", response.data);

      const data = response.data.data[0];
      setName(data.company_name); 
      setYoutube(data.link_youtube);
      setInstagram(data.instagram);
      setWhatsapp(data.no_wa);
      setTelphone(data.no_telephone);
      setMap(data.map);
      setLinkedin(data.link_linkedin);
      setEmail(data.email);
      setDescription(data.description_company);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-8 pb-6" style={{ background: "#222258" }}>
      <div className="container mx-auto px-4">
        <img
          className="w-[5%] ml-3 object-cover"
          src="/image/whiteLogo.png"
          alt="logo"
        />
        <div className="w-full lg:w-6/12 px-4 flex items-center">
          <h5 className="text-lg mt-0 mb-2 text-white ml-2">{name}</h5>
        </div>
        <div>
          <div className="flex flex-wrap lg:justify-center justify-between gap-[140px] px-[30px] text-white">
            <div>
              <p
                className="max-w-[300px]"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
            <div>
              <p>Location</p>
              <iframe
              className="max-w-[250px]"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3904885292955!2d106.80826197460277!3d-6.598296893395508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5935743b7e3%3A0x76074157a5981127!2si7%20Creative%20Community%20Space!5e0!3m2!1sid!2sid!4v1708049118110!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="flex gap-[20px]">
              <div>
                <p>Company</p>
                <ul>
                  <li>{whatsapp}</li>
                  <li>{telphone}</li>
                  <li>{instagram}r</li>
                  <li>{map}i</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="mt-6 lg:mb-0 mb-6">
              <a href={`https://wa.me/${whatsapp}`} target="_blank">
                <button
                  className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    style={{ color: "#000000" }}
                  />
                </button>
              </a>
              <a href={linkedin} target="_blank">
                <button
                  className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#000000" }}
                  />
                </button>
              </a>
              <a
                href={`https://www.instagram.com/${instagram}?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==`}
                target="_blank"
              >
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    style={{ color: "#000000" }}
                  />
                </button>
              </a>
              <a href={map} target="_blank">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"

                >
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "#000000" }}
                  />
                </button>
              </a>
              <a href={youtube} target="_blank">
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    style={{ color: "#000000" }}
                  />
                </button>
              </a>
              {/* fdsjfj */}
              <a href="#12" onClick={openModalPhone}>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ color: "#000000" }}
                  />
                </button>
                {isOpenPhone && (
                <div
                  className="fixed top-[50%] left-[50%] bg-white p-[20px] lg:w-1/4 border-2 ease-out border-gray-200"
                  style={{
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <button onClick={closeModalPhone} className="float-right">
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="text-slate-700"
                    />
                  </button>
                  <h4 className="font-bold">phone number</h4>
                  <div className="flex items-center bg-slate-200 rounded-md my-5">
                    <input
                      type="text"
                      readOnly
                      value={telphone}
                      className="flex-1 px-2 py-3 rounded-l-md text-gray-800 bg-transparent border-0 focus:outline-none focus:ring-0"
                    />
                    <button
                      onClick={copyToClipboardPhone}
                      className="px-4 py-3 bg-slate-700 hover:bg-slate-800 rounded-r-md"
                    >
                      <FontAwesomeIcon
                        icon={faCopy}
                        className="text-white text-xl"
                      />
                    </button>
                  </div>
                </div>
              )}

              {isOpenPhone && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 999,
                  }}
                  onClick={closeModalPhone}
                ></div>
              )}
                {/* fdjfkld */}
              </a>
              <a href="#!" onClick={openModal}>
                <button
                  className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#000000" }}
                  />
                </button>
              </a>
              {isOpen && (
                <div
                  className="fixed top-[50%] left-[50%] bg-white p-[20px] lg:w-1/4 border-2 ease-out border-gray-200"
                  style={{
                    transform: "translate(-50%, -50%)",
                    zIndex: 1000,
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <button onClick={closeModal} className="float-right">
                    <FontAwesomeIcon
                      icon={faCircleXmark}
                      className="text-slate-700"
                    />
                  </button>
                  <h4 className="font-bold">Email Address</h4>
                  <div className="flex items-center bg-slate-200 rounded-md my-5">
                    <input
                      type="text"
                      readOnly
                      value={email}
                      className="flex-1 px-2 py-3 rounded-l-md text-gray-800 bg-transparent border-0 focus:outline-none focus:ring-0"
                    />
                    <button
                      onClick={copyToClipboard}
                      className="px-4 py-3 bg-slate-700 hover:bg-slate-800 rounded-r-md"
                    >
                      <FontAwesomeIcon
                        icon={faCopy}
                        className="text-white text-xl"
                      />
                    </button>
                  </div>
                </div>
              )}

              {isOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    zIndex: 999,
                  }}
                  onClick={closeModal}
                ></div>
              )}
              {/* fsfjksal */}
            </div>
          </div>
        </div>
        <div className="text-center text-white mt-4">
          © {currentYear} Casatech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
