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
    <div className="border-2 border-[#FF7315] -mt-[1.3rem] 2xl:-mt-[0.12rem]">

    <div className=" 2xl:m-20 m-12">
      <div className="flex justify-center mb-10">
        <h1 className="font-bold 2xl:text-5xl text-4xl text-[#3A3535]">لماذا نحن</h1>
      </div>
      <div className="h-96">
      <Swiper
        modules={[A11y, EffectFade, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        effect={"fade"}
        speed={2000}
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
            
          <span className="relative  left-[120px]  text-sm text-center  p-3 py-4 text-white bg-[#3A3535] rounded-3xl shadow-2xl">
            مقاوم للملوحة والرطوبة
          </span>
          <span className="relative -top-36 left-20 text-center text-sm flex items-center p-1 py-4 justify-center text-white bg-[#3A3535] rounded-3xl shadow-2xl">
            متوفر بجميع الأشكال
          </span>
          <span className="relative top-2  left-24 text-[16px] text-center p-3 py-4  justify-center text-white bg-[#3A3535] rounded-3xl shadow-2xl">
            خشونة السطح
          </span>
          <span
            className="relative top-28  text-[16px] text-center p-3 py-4 text-white bg-[#3A3535] 
            rounded-3xl shadow-2xl"
            >
            عازل طبيعى للحرارة والصوت
          </span>
          <span className="relative right-96 text-sm 2xl:right-[600px] top-36 text-center  p-3 py-4  text-white bg-[#3A3535] rounded-3xl shadow-2xl">
            مقاوم للتصدع والتشقيق
          </span>
          <div className="flex flex-col justify-start  relative bottom-28 right-36  text-right w-96">
            <h1 className="2xl:text-[34px] text-[32px] font-semibold text-[#FF7315] ">
              خصائص بركانى نما طيبة
            </h1>
            <p className=" -mb-10 text-xl 2xl:text-2xl">
              بلك نما طيبة المعزول هو مثالى للبناء من جميع النواحى فهو فعال من
              حيث التكلفة وسهولة الاستخدام ويوفر خلفية مثالية لقبول أعمال
              اللياثة
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center items-center gap-8">
            <span className=" relative bottom-14 left-4 text-center  p-1   text-white bg-[#3A3535] rounded-3xl shadow-2xl">
              <h1 className="text-xl font-semibold">خفيف الوزن</h1>
              <p className="font-light text-sm mt-2 leading-6 p-1 w-52">
                يعتبر أخف وزن بكثير من البلك الأسمنتى والبلك الطينى الحامل من
                نفس المقاس
              </p>
            </span>
            <span className=" relative top-20 right-56 text-center  p-1   text-white bg-[#3A3535] rounded-3xl shadow-2xl">
              <h1 className="text-xl font-semibold">القوة والمتانة</h1>
              <p className="font-light text-sm mt-2 leading-6 p-1 w-48">
                نتيجة ارتفاع قوة الضغط المستخدمة فى التصنيع فان مقاومته للضغط
                عالية جدا
              </p>
            </span>
            <span className=" relative right-44 text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-2xl">
              <h1 className="text-xl font-semibold">يقبل تركيب المسامير </h1>
              <p className="font-light text-sm mt-2 leading-6 w-44">
                يتحمل البلك البركانى عملية تركيب المسامير فى الجدران بكفائة
                عالية خاصة عند تركيب المفصلات للأبواب والمسامير ولتثبيت الرخام
                والحجر
              </p>
            </span>
            <span className="relative right-36 bottom-20  text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-2xl">
              <h1 className="text-xl font-semibold">سهولة التلييس </h1>
              <p className="font-light text-sm mt-2 leading-6 w-44 px-2">
                يمتاز البك البركانى بسطحه الخشن وهذا يساعد على تماسك اللياسة مع
                توفير أو الغاء عملية الطرطشة كما أن طبقة اللياسة تصبح أقل سماكة
                مما يوفر فى الأسمنت
              </p>
            </span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row justify-center items-center gap-4">

            <span className=" relative top-20 right-20 text-center  p-1   text-white bg-[#3A3535] rounded-3xl shadow-2xl">
              <h1 className="text-xl font-semibold">مقاوم للحريق</h1>
              <p className="font-light text-sm mt-2 leading-6 p-1 w-48">
                يعتبر من أفضل أنواع البلك على الاطلاق فى مقاومة النار واللهب
                المباشر حيث أن المادة الأولية هى مادة خاملة غير قابلة للاحتراق
              </p>
            </span>
            <span className=" relative right-10 bottom-20 text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-2xl">
              <h1 className="text-xl font-semibold">مقاوم للملوحة</h1>
              <p className="font-light text-sm mt-2 leading-6 w-44">
                يصنع البلك من مادة البوزلان التى نسنخدم كمادة أولية فى صناعة
                الأسمن الوزلانى المقاوم للملوحة مما يقلل من عملية التاكل
              </p>
            </span>
            <span className="relative  bottom-  text-center  p-2   text-white bg-[#3A3535] rounded-3xl shadow-2xl">
              <h1 className="text-xl font-semibold">سهولة التمديدات </h1>
              <p className="font-light text-sm mt-2 leading-6 w-44 px-2">
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
