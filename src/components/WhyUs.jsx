import React from "react";
import SwiperCore, {
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "../index.css";
import img3 from "../assets/img3.png";
import cert1 from "../assets/cert1.png";
import cert3 from "../assets/cert3.png";
import Button from "./Button";

const WhyUs = () => {
  return (
    <div className="border-2 border-[#FF7315]  md:-mt-[1.3rem] 2xl:-mt-[0.12rem] w-full">

    <div className=" 2xl:m-20 md:m-12 m-5">
      <div className="flex justify-center mb-10">
        <h1 className="font-bold 2xl:text-5xl text-4xl text-[#3A3535]">لماذا نحن</h1>
      </div>
      <div className="md:h-96 h-[479px] w-full">
      <Swiper
        modules={[A11y, EffectFade, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        effect={"fade"}
        // speed={2000}
        // autoplay={{ delay: 2000, disableOnInteraction: false }}
        className="mySwiper "
        style={{
          "--swiper-pagination-color": "#FF7315",
          "--swiper-pagination-bullet-inactive-color": "",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "8px",
        }}
      >
        <SwiperSlide>
            
          <div className="max-sm:flex max-sm:flex-col max-sm:gap-6">
          <div className="flex flex-col justify-start  relative md:bottom-28  text-right w-96 max-sm:w-full max-sm:mb-14">
            <h1 className="2xl:text-[34px] text-[32px] font-semibold text-[#FF7315] max-sm:text-2xl ">
              خصائص بركانى نما طيبة
            </h1>
            <div className=" md:-mb-10 text-xl 2xl:text-2xl">
              بلك نما طيبة المعزول هو مثالى للبناء من جميع النواحى فهو فعال من
              حيث التكلفة وسهولة الاستخدام ويوفر خلفية مثالية لقبول أعمال
              اللياثة
            </div>
          </div>
          <div>
          <p className="relative    text-sm text-center  p-3 py-4 text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:w-64 max-sm:top-2">
            مقاوم للملوحة والرطوبة
          </p>
          <p className="relative -top-28 left-20 text-center text-sm md:flex items-center p-1   py-4 justify-center text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:w-44 max-sm:left-44">
            متوفر بجميع الأشكال
          </p>
          <p className="relative top-2  left-24 text-[16px] text-center p-3 py-4  text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:text-sm max-sm:w-44 max-sm:-top-8">
            خشونة السطح
          </p>
          <p
            className="relative top-28  text-[16px] text-center p-3 py-4 text-white bg-[#3A3535] 
            rounded-3xl shadow-lg max-sm:text-sm max-sm:w-64 max-sm:-top-5 max-sm:left-28"
            >
            عازل طبيعى للحرارة والصوت
          </p>
          <p className="relative right-[430px] text-sm 2xl:right-[600px] top-36 text-center  p-3 py-4  text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:w-64 max-sm:right-0 max-sm:-top-3">
            مقاوم للتصدع والتشقيق
          </p>
          </div>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center items-center gap-8">
            <span className=" relative bottom-14 left-4 text-center  p-1   text-white bg-[#3A3535] rounded-3xl shadow-lg">
              <h1 className="text-xl font-semibold">خفيف الوزن</h1>
              <p className="font-light text-sm mt-2 leading-6 p-1 w-52">
                يعتبر أخف وزن بكثير من البلك الأسمنتى والبلك الطينى الحامل من
                نفس المقاس
              </p>
            </span>
            <span className=" relative top-20 right-56 text-center  p-1   text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:right-0 max-sm:top-28">
              <h1 className="text-xl font-semibold">القوة والمتانة</h1>
              <p className="font-light text-sm mt-2 leading-6 p-1 w-48 max-sm:leading-9">
                نتيجة ارتفاع قوة الضغط المستخدمة فى التصنيع فان مقاومته للضغط
                عالية جدا
              </p>
            </span>
            <span className=" relative right-44 text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:right-[230px] max-sm:bottom-28">
              <h1 className="text-xl font-semibold">يقبل تركيب المسامير </h1>
              <p className="font-light text-sm mt-2 leading-10 md:leading-6 md:w-44 w-[176px]">
                يتحمل البلك البركانى عملية تركيب المسامير فى الجدران بكفائة
                عالية خاصة عند تركيب المفصلات للأبواب والمسامير ولتثبيت الرخام
                والحجر
              </p>
            </span>
            <span className="relative right-36 bottom-20  text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:right-64 max-sm:bottom-[85px]">
              <h1 className="text-xl font-semibold">سهولة التلييس </h1>
              <p className="font-light text-sm mt-2 leading-6 w-44 px-2 max-sm:w-[147px] max-sm:leading-8 ">
                يمتاز البك البركانى بسطحه الخشن وهذا يساعد على تماسك اللياسة مع
                توفير أو الغاء عملية الطرطشة كما أن طبقة اللياسة تصبح أقل سماكة
                مما يوفر فى الأسمنت
              </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center items-center gap-4">

            <span className=" relative top-20 right-20 text-center  p-1   text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:left-[196px] max-sm:top-40 ">
              <h1 className="text-xl font-semibold">مقاوم للحريق</h1>
              <p className="font-light text-sm mt-2 leading-6 p-1 w-48 max-sm:w-72">
                يعتبر من أفضل أنواع البلك على الاطلاق فى مقاومة النار واللهب
                المباشر حيث أن المادة الأولية هى مادة خاملة غير قابلة للاحتراق
              </p>
            </span>
            <span className=" relative right-10 bottom-20 text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:right-[150px]">
              <h1 className="text-xl font-semibold">يقبل تركيب المسامير </h1>
              <p className="font-light text-sm mt-2 leading-6 w-44 max-sm:leading-10">
              يتحمل البلك البركاني عملية تركيب المسامير فى الجدران بكفاءة عالية خاصة عند تركيب المفصلات للأبواب والمسامير ولتثبيت الرخام والحجر              
              </p>
            </span>
            <span className="relative    text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-lg max-sm:right-[158px] max-sm:bottom-[70px]">
              <h1 className="text-xl font-semibold">سهولة التمديدات </h1>
              <p className="font-light text-sm mt-2 leading-6 w-44 px-2 max-sm:leading-8 max-sm:w-36">
                يمكن قص البلك البركانى بدون أن ينكسر وتجرى التمديدات على الفجوة
                الخارجية مع المحتفظة على قوة البلك وعزله الحرارى
              </p>
            </span>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
            </div>
  );
};

export default WhyUs;
