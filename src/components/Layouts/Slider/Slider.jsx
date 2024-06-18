import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { EffectFade } from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectFade]}
    spaceBetween={50}
    effect="fade"
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
 
  >
    <SwiperSlide>
        <img src="/image/lazada.png" alt="" stype={{width:"100%"}} />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/image/lazada.png" alt="" stype={{width:"100%"}} />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/image/lazada.png" alt="" stype={{width:"100%"}} />
    </SwiperSlide>
    <SwiperSlide>
        <img src="/image/lazada.png" alt="" stype={{width:"100%"}} />
    </SwiperSlide>
 
    ...
  </Swiper>
  )
}

export default Slider
