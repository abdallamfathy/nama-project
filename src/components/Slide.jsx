import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import "swiper/css";
import quality from '../assets/quality.png';
const Slide = () => {
  return (
    <div className='container mx-auto my-10'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={3.5}
      scrollbar={{ draggable: true }}
      className='mySwiper'
      >
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
        <SwiperSlide><img src={quality} alt="image" className='w-[351px] h-[497px]'/></SwiperSlide>
      </Swiper>
       </div>
  )
}

export default Slide 