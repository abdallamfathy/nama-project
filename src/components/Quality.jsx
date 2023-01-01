import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import quality from "../assets/quality.png";
import Button from "./Button";

const Quality = () => {
  return (
    <div className="2xl:my-28 my-20">
      <div className="flex flex-col  justify-center  mx-20 2xl:mx-28">
        <h1 className="2xl:text-5xl text-4xl font-bold text-center mb-12">الجودة</h1>
        <p className="2xl:text-3xl text-2xl  text-center ">يُنتج مصنع نما طيبة أنواع عديدة من البلك البركاني باستخدام مواد بوزلانية خالية من الشوائب يتم جلبها من الجبال البركانية التي تشتهر بها منطقة المدينة المنورة وتكون مواد خام على هيئة بودرة بركانية وحصى بركاني مقاس ( 3/8 in ) وتنعكس جودتهما ومدى نقائهما على جودة البلك البركاني. وحرصاً منا في مصنع نما طيبة على تقديم منتجات عالية الجودة للعملاء، نقوم بانتقاء المواد الخام المستخدمة في التصنيع من مواد بوزلانية نقية وأسمنت مقاوم نختارها جميعها بعناية من أفضل المصادر والموردين لنتمكن وبثقة من توريد ما يحتاجه عملاؤنا في المملكة العربية السعودية من منتجات بركانية مهما كانت كمياتها وأنواعها وبأعلى ضمانات الجودة.

        </p>
      </div>
      <div className=" my-32 ml-16 ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3.5}
          spaceBetween={30}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={quality}
              alt="image"
              className="w-[351px] h-[497px] shadow-xl my-2 mb-4"
            />
          </SwiperSlide>
        </Swiper>
        <Button text={"عرض المزيد"} href={"/quality"} />
      </div>
    </div>
  );
};

export default Quality;
