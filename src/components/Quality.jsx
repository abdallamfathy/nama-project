import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import Button from "./Button";
import {  quality } from './Constants'

const Quality = () => {

  const qualityImages = quality;

  return (
    <div className="2xl:my-20 my-12 max-sm:m-5">
      <div className="flex flex-col  justify-center  mx-20 2xl:mx-28 max-sm:mx-5">
        <h1 className="2xl:text-5xl text-4xl font-bold text-center mb-12 max-sm:text-2xl">الجودة</h1>
        <p className="2xl:text-3xl text-2xl  text-center max-sm:hidden ">يُنتج مصنع نما طيبة أنواع عديدة من البلك البركاني باستخدام مواد بوزلانية خالية من الشوائب يتم جلبها من الجبال البركانية التي تشتهر بها منطقة المدينة المنورة وتكون مواد خام على هيئة بودرة بركانية وحصى بركاني مقاس ( 3/8 in ) وتنعكس جودتهما ومدى نقائهما على جودة البلك البركاني. وحرصاً منا في مصنع نما طيبة على تقديم منتجات عالية الجودة للعملاء، نقوم بانتقاء المواد الخام المستخدمة في التصنيع من مواد بوزلانية نقية وأسمنت مقاوم نختارها جميعها بعناية من أفضل المصادر والموردين لنتمكن وبثقة من توريد ما يحتاجه عملاؤنا في المملكة العربية السعودية من منتجات بركانية مهما كانت كمياتها وأنواعها وبأعلى ضمانات الجودة.

        </p>
      </div>
      <div className=" md:my-32 md:ml-16 max-md:hidden ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={4.5}
          spaceBetween={50}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {qualityImages.map((quality) => (

          <SwiperSlide key={quality.id}>
            <img
              src={quality.image}
              alt="image"
              className="w-[351px] h-[497px] shadow-lg my-2 mb-4"
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>


      {/* Mobile version */}
      <div className=" md:my-32 md:ml-16 md:hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={1.2}
          spaceBetween={30}
          scrollbar={{ draggable: true }}
          className="mySwiper"
        >
          {qualityImages.map((quality) => (
          <SwiperSlide>
            <img
              key={quality.id}
              src={quality.image}
              alt="image"
              className="w-[351px] h-[497px] shadow-lg my-2 mb-4"
            />
          </SwiperSlide>
          ))}
        </Swiper>
      </div>
    <div className="max-sm:-mt-10">  <Button text={"عرض المزيد"} href={"/quality"} />
</div>
    </div>
  );
};

export default Quality;
