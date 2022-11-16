import { Carousel } from 'flowbite-react'
import React from 'react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y , EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../index.css"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Slider = () => {
  return (
    <div className="h-[103vh] -ml-1">
        
        <h1 className='text-white z-50 top-[420px] relative text-center  text-6xl font-bold'>
            خصم يبدأ من <span className='text-[#FF7315]'>%15</span> ويصل الى <span className='text-[#FF7315]'>%30</span></h1>
            <Swiper modules={[Navigation , Pagination , Scrollbar , A11y , EffectFade , Autoplay ]}
        pagination={{ dynamicBullets: false,clickable: true,background: 'red' 
        }}
        effect={'fade'}
        speed={2500}
        autoplay={{   delay: 1500 , disableOnInteraction: false }}
        className="mySwiper -mt-32 " 
        
        style={{
            "--swiper-pagination-color": "#FF7315",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            
             }}
        >
            <SwiperSlide>
                <div className=''></div>
                <img src={img1} alt="image" className=' brightness-50' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img2} alt="image" className='brightness-50 ' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={img3} alt="image" className='brightness-50 ' />
            </SwiperSlide>
        </Swiper>
  </div>
  )
}

export default Slider


{/* <Carousel 
    leftControl=" "
    rightControl=" "
    
    className='-mt-32 -z-50 '>
      <div className="object-cover duration-1000 ease-in ">
        <img src={img1} alt="image" className='object-contain pt-14' />
      </div>
      <div className="">
      <img src={img2} alt="image"  className='object-contain pt-14'/>
      </div>
      <div className="">
      <img src={img3} alt="image"  className='object-contain pt-14'/>
      </div>
    </Carousel> */}