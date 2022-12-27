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
    <div className="h-[103vh] -mt-6 -ml-1">
      <h1 className="text-white z-40 2xl:top-[600px] top-96 relative text-center  2xl:text-6xl text-5xl font-bold">
        خصم يبدأ من <span className="text-[#FF7315]">%15</span> ويصل الى{" "}
        <span className="text-[#FF7315]">%30</span>
      </h1>
      <a href={pdf} download="nama.pdf" className="text-[#FF7315] z-40 2xl:top-[600px] top-64 left-[540px] relative text-center  2xl:text-3xl text-2xl  ">
      تحميل ملف نما طيبة
      </a>
      <hr className=" 2xl:top-[600px] top-[260px] relative border-t z-40 left-[560px] border-[#FF7135]  w-40" />
      
      <div className="flex relative 2xl:top-[600px] left-80 top-96 z-40 w-72 gap-4 items-center">
      <h1 className="text-white      2xl:text-3xl text-xl ">
      0555301707 - 0500361234
      </h1>
      <img src={call} alt="call image" className="w-5 h-5" />
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
        <SwiperSlide>
          <img
            src={img1}
            alt="image"
            className=" brightness-50  object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={img2}
            alt="image"
            className="brightness-50  object-cover "
          />
        </SwiperSlide>
        <SwiperSlide>
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
