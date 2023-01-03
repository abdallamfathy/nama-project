import React, { useEffect } from "react";
import SwiperCore, { Scrollbar, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "../index.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img4 from "../assets/img4.png";
import Button from "./Button";

const About = () => {
      return ( 
      <div className="shadow-xl">
  <div className="2xl:mx-20 my-28 mx-12 ">
      <div className="flex justify-center mb-24">
        <h1 className="font-bold 2xl:text-5xl text-4xl text-[#3A3535]">معلومات عن المصنع</h1>
      </div>
      <div className="w-full">
      <Swiper
        modules={[A11y, EffectFade, Autoplay]}
        effect={"fade"}
        speed={2500}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        className="mySwiper "
      >
        {/* <SwiperSlide>
          <div className="flex flex-row gap-x-96 mb-4">
            <img
              src={img3}
              alt="image"
              className="2xl:w-[520px] 2xl:h-[380px] w-[462px] h-[498px] mb-4 rounded-xl brightness-50 "
            />
            <div className="flex flex-col justify-center items-end w-96">
              <h1 className="2xl:text-[34px] text-3xl font-semibold text-[#FF7315] text-right">
                نبذة عن المصنع
              </h1>
              <p className="text-right  -mb-10">
                يعد مصنع نما طيبة من المصانع الرائدة فى مجال البلوكات اأسمنتية (
                بلوك - انتر لوك ) حيث يمتلك حطوط انتاج على أعلى مستوى من الكفائة
                والجودة لضمان خروج منتج عالى الجودة لتلبية احتياجات عملائنا
                الكرام بالكمية المطلوبة طبقا للجدول الزمنى المتفق عليه مع العميل
                ويقع مصنع نما طيبة للمنحات الاسمنتية بموقع متميز لضمان تغطية
                أكبر لجميع عملائنا ونسعى لفتح فروع أخرى لتلبية احتياجات عملائنا
                بباقى مناطق المملكة{" "}
              </p>
              <Button className="mt-0" text="اقرأ المزيد" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row gap-x-96 mb-4">
            <img
              src={img3}
              alt="image"
              className="2xl:w-[520px] 2xl:h-[380px] w-[462px] h-[498px] mb-4 rounded-xl brightness-50"
            />
            <div className="flex flex-col justify-center items-end w-96">
              <h1 className="2xl:text-[34px] text-3xl font-semibold text-[#FF7315] text-right">
                قيمنا
              </h1>
              <p className="text-right -mb-10">
                رضا عملائنا , الجودة الفائقة الاحترافية, المصداقية والأمانة,
                الشفافية والوضوح, الابتكار والابداع, تطوير مهارات الكادر الفنى
                والادارى بالمصنع
              </p>
              <Button className="mt-0" text="اقرأ المزيد" href={"/about"} />
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="flex flex-row gap-x-96  mb-4">
            <img src={img4} alt="s" className="2xl:w-[520px] 2xl:h-[380px] w-[462px] h-[498px] rounded-xl brightness-50"
            />
            <div className="flex flex-col justify-center items-end w-96">
              <h1 className="2xl:text-[34px] text-3xl font-semibold text-[#FF7315] text-right">
                أهدافنا
              </h1>
              <p className="text-right -mb-10">
                ايجاد بيئة عمل متكاملة, نستثمر من خلالها أعلى الكفائات والخبرات
                البشرية, لمواكبة احتياجات ومتطلبات السوق السعودى والعربى بشكل
                عام. مع مسيرة ااتطوير والتنمية التى تشهدها المملكة بكافة مناحى
                الحياة والمجنمع ومصممون على التميز فى كل مجالات أعمالنا وفق
                فلسفة تنتهج الجودة المتكاملة باستخدام ما نملكه من قدرات فنية
                وموارد بشرية والاستعانة بأحدث ما توصلت اليه التكنولوجيا الحديثة
                من برامج.
              </p>
              <Button className="mt-0" text="اقرأ المزيد" href={"/about"} />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="flex flex-row gap-x-96  mb-4">
            <img
              src={img3}
              alt="image"
              className="2xl:w-[520px] 2xl:h-[380px] w-[462px] h-[498px] rounded-xl brightness-50"
            />
            <div className="flex flex-col justify-center items-end w-96">
              <h1 className="2xl:text-[34px] text-3xl font-semibold text-[#FF7315] text-right">
                سياستنا الخاصة
              </h1>
              <p className="text-right text-xl font-bold">رضا عملائنا</p>
              <p className="text-right">
                المعيار الوحيد المعتمد لدينا هو رضا العملاء
              </p>

              <p className="text-right text-xl font-bold">التنمية</p>
              <p className="text-right">
                نسعى الى خلق بيئة عمل متجددة داخل المصنع ونهدف الى التحسين
                المستمر للمصنع وللموظفين
              </p>
              <p className="text-right text-xl font-bold">تحسين نطم الادارة </p>
              <p className="text-right -mb-10">
                الالتزام والمحافظة على العمل وفقا للايزو 9001-2008 ونلتزم
                بالتطوير المستمر من خلال تحليل ملاحظات العملاء والمراجعة.
              </p>

              <Button className="mt-0" text="اقرأ المزيد" href={"/about"} />
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      </div>
    </div>
    </div>
  );
};

export default About;
