
import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const History = () => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className=' '>
    <div className='w-1/2 mx-auto mt-10' >
      <h1 className='lg:text-4xl md:text-3xl text-2xl font-semibold font-mono text-center' data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
        this is the <span className='text-blue-800'>history</span> of the <span className='text-blue-800'>founding</span> of this <span className='text-blue-800'>Company</span>
      </h1>
    </div>
    <div className='flex justify-center mt-10'>
        <img src="/image/meeting.png " className='lg:w-1/2 md:mx-2' alt=""  data-aos="zoom-in-up"/>
    </div>
    <div>
      <h1 className='lg:text-4xl md:text-2xl text-md font-semibold font-mono pl-10 p-10 ' data-aos="fade-right" data-aos-duration="1000">judul berita</h1>
      <div className=' text-sm lg:text-md mx-10'>

       <div className=''>
       <p className='' data-aos="zoom-in-up">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus eveniet maxime reiciendis sed repudiandae eligendi impedit. Natus harum laudantium eaque, aspernatur magni laborum iste dolorum eligendi, nulla id repudiandae nemo explicabo blanditiis excepturi provident dolores voluptates perspiciatis ipsum placeat. Repudiandae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur libero, dolorum deleniti reprehenderit qui voluptatum corrupti at culpa ratione a? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto, aliquid totam commodi nisi facere itaque debitis possimus dolorem eum ipsam quo. Labore fugiat ducimus minus pariatur illum perferendis laboriosam. Soluta maxime molestiae repudiandae. Quos, iusto porro hic corporis delectus, enim at nostrum nisi, dolorem consectetur minima sit libero ab magnam quis vero aliquid. Placeat fugiat fugit eius veniam voluptate.
        </p>
       </div>
       
       
      </div>
    </div>
  </div>
  
  )
}

export default History
