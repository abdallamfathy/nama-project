import React from 'react'
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
import img4 from "../assets/img4.png";


const AboutMob = () => {
  return (
    <div className=''>
        <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
       
        effect={"fade"}
        speed={2500}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="mySwiper "
        style={{
          "--swiper-pagination-color": "#FF7315",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "10px",
        }}
      >
        <SwiperSlide className="swiper-slides">
        <div className="bg-aboutMob h-[456px] w-full">
        <div className='bg-black h-full w-full bg-opacity-50 '>
        <div className="flex justify-center pt-5  ">
        <h1 className="font-bold text-white text-2xl">معلومات عن المصنع</h1>
        </div>
        <div className='text-right m-5 mt-10 '>
            <h2 className='text-lg text-[#FF7315]'>نبذة عن المصنع</h2>
            <p className='text-white text-sm leading-9 '>يعد مصنع نما طيبة من المصانع الرائدة فى مجال البلوكات البركانية و الإسمنتية ( بلوك - انتر لوك ) حيث يمتلك خطوط انتاج على أعلى مستوى من الكفاءة والجودة لضمان خروج منتج عالي الجودة لتلبية احتياجات عملائنا الكرام بالكمية المطلوبة طبقا للجدول الزمنى المتفق عليه مع العميل ويقع مصنع نما طيبة للمنتجات الاسمنتية والبركانية بموقع متميز لضمان تغطية أكبر لجميع عملائنا ونسعى لفتح فروع أخرى لتلبية احتياجات عملائنا بباقي مناطق المملكة </p>
        <button className='text-left bg-white rounded-xl px-4 p-2 text-[#FF7315] mt-4'>اقرأ المزيد</button>
        </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
        <div className="bg-aboutMob h-[456px] w-full">
        <div className='bg-black h-full w-full bg-opacity-50 '>
        <div className="flex justify-center pt-5  ">
        <h1 className="font-bold text-white text-2xl">معلومات عن المصنع</h1>
        </div>
        <div className='text-right m-5 mt-10 '>
            <h2 className='text-lg text-[#FF7315]'>أهدافنا</h2>
            <p className='text-white text-sm leading-9 '>إيجاد بيئة عمل متكاملة, نستثمر من خلالها أعلى الكفاءات والخبرات البشرية, لمواكبة احتياجات ومتطلبات السوق السعودي والعربي بشكل عام. مع مسيرة التطوير والتنمية التي تشهدها المملكة بكافة مناحي الحياة والمجمع ومصممون على التميز فى كل مجالات أعمالنا وفق فلسفة تنتهج الجودة المتكاملة باستخدام ما نملكه من قدرات فنية وموارد بشرية والاستعانة بأحدث ما توصلت اليه التكنولوجيا الحديثة من برامج.</p>
        <button className='text-left bg-white rounded-xl px-4 p-2 text-[#FF7315] mt-4'>اقرأ المزيد</button>
        </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
        <div className="bg-aboutMob h-[456px] w-full">
        <div className='bg-black h-full w-full bg-opacity-50 '>
        <div className="flex justify-center pt-5  ">
        <h1 className="font-bold text-white text-2xl">معلومات عن المصنع</h1>
        </div>
        <div className='text-right m-5 mt-10 '>
            <h2 className='text-lg text-[#FF7315]'>قيمنا</h2>
            <p className='text-white text-sm leading-9 '>رضا عملائنا , الجودة الفائقة الاحترافية, المصداقية والأمانة, الشفافية والوضوح, الابتكار والابداع, تطوير مهارات الكادر الفني والإداري بالمصنع</p>
        <button className='text-left bg-white rounded-xl px-4 p-2 text-[#FF7315] mt-4'>اقرأ المزيد</button>
        </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slides">
        <div className="bg-aboutMob h-[456px] w-full">
        <div className='bg-black h-full w-full bg-opacity-50 '>
        <div className="flex justify-center pt-5  ">
        <h1 className="font-bold text-white text-2xl">معلومات عن المصنع</h1>
        </div>
        <div className='text-right m-5 mt-10 text-white leading-10 '>
            <h2 className='text-lg text-[#FF7315]'>سياستنا الخاصة</h2>
            <p className='font-bold'>رضا عملائنا</p>
            <p className='text-sm'>المعيار الوحيد المعتمد لدينا هو رضا العملاء</p>
            <p className='font-bold'>التنمية</p>
            <p className='text-sm'>نسعى الى خلق بيئة عمل متجددة داخل المصنع ونهدف الى التحسين المستمر للمصنع وللموظفين</p>
            <p className='font-bold'>تحسين نطم الإدارة </p>
            <p className='text-sm'>الالتزام والمحافظة على العمل وفقا للأيزو 9001-2008 ونلتزم بالتطوير المستمر من خلال تحليل ملاحظات العملاء والمراجعة.</p>
        <button className='text-left bg-white rounded-xl px-4 p-2 text-[#FF7315] mt-4'>اقرأ المزيد</button>
        </div>
        </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default AboutMob