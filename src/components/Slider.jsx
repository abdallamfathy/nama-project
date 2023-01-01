import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../index.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import pdf from "../assets/file/nama.pdf";
import call from "../assets/call.png";

const Slider = () => {
  return (
    <div className="h-[103vh]  ">
      <h1 className="text-white z-40  top-[439px] 2xl:top-[604px] relative text-center   text-5xl 2xl:text-6xl font-bold">
        خصم يبدأ من <span className="text-[#FF7315]">%15</span> ويصل الى{" "}
        <span className="text-[#FF7315]">%30</span>
      </h1>
      <h1 className="text-center">
      <a href={pdf} download="nama.pdf" className="text-[#FF7315] z-40  top-[309px] 2xl:top-[474px] relative text-2xl     2xl:text-[32px] border-b border-[#FF7315] buttons  ">
      تحميل ملف نما طيبة
      </a>
      </h1>
     <div className="flex flex-row  relative top-[430px] 2xl:top-[596px] right-44 gap-2 justify-center items-center">
       
     <h1 className="text-white z-40  text-center 2xl:text-2xl  text-[18px] ">
      0555301707 - 0500361234
      </h1>
          <img src={call} alt="call image" className="w-5 h-5 z-40 " />

     </div>
      
      <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
          background: "red",
        }}
        effect={"fade"}
        speed={2500}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="mySwiper -mt-32 "
        style={{
          "--swiper-pagination-color": "#FF7315",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
        }}
      >
        <SwiperSlide className="swiper-slides">
          <img
            src={img1}
            alt="image"
            className=" brightness-50  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img
            src={img2}
            alt="image"
            className="brightness-50   object-top "
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
          <img
            src={img3}
            alt="image"
            className="brightness-50 object-cover  "
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
