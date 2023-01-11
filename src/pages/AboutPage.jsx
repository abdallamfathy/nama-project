import React, { useEffect } from "react";
import { FaLessThan } from "react-icons/fa";
import { Footer, Navbar } from "../components";
import envlogo from "../assets/env-logo.png";
import hrlogo from  "../assets/hr-logo.png";
import zakalogo from "../assets/zaka-logo.png"
import citylogo from "../assets/cities-logo.png"
import houselogo from "../assets/house-logo.png"
import energylogo from "../assets/energy-logo.png"
import Certificates from "../components/Certificates";


const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar
        textColor="text-[#3A3535] border-b border-[#ff731573]"
        socialDisplay="hidden"
      />
      <div className="2xl:mx-20 mx-12 max-sm:m-5 ">
        <div className="flex justify-end 2xl:py-20 mt-36 mb-20 items-baseline gap-4 max-sm:my-5">
          <h1 className="text-3xl font-bold text-[#FF7315] max-sm:text-2xl ">من نحن</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535] max-sm:text-xl">الرئيسية</h1>
        </div>
        <div className="text-right flex flex-col mb-12">
          <h1 className="2xl:text-3xl text-xl text-[#FF7315] mb-4">نبذة عن المصنع</h1>
          <p className="2xl:text-2xl text-lg text-[#3A3535]">يعد مصنع نما طيبة من المصانع الرائدة فى مجال البلوكات الإسمنتية ( بلوك - انتر لوك ) حيث يمتلك حطوط انتاج على أعلى مستوى من الكفاءة والجودة لضمان خروج منتج عالي الجودة لتلبية احتياجات عملائنا الكرام بالكمية المطلوبة طبقا للجدول الزمنى المتفق عليه مع العميل ويقع مصنع نما طيبة للمنحات الاسمنتية بموقع متميز لضمان تغطية أكبر لجميع عملائنا ونسعى لفتح فروع أخرى لتلبية احتياجات عملائنا بباقي مناطق المملكة  

          </p>
        </div>
        <div className="flex flex-row flex-wrap 2xl:gap-28 gap-20 gap-x-64 justify-center max-sm:gap-5">
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[330px] shadow-xl max-sm:left-64">
              <p className="text-center text-lg">قيمنا</p>
            </div>
            <div className="2xl:w-[550px] w-[442px] h-96 rounded-2xl p-9  2xl:text-xl text-lg bg-[#3A3535] inline-block text-white text-right max-sm:w-96">
              <p className="mt-2">رضا عملائنا , الجودة الفائقة الاحترافية, المصداقية والأمانة, الشفافية والوضوح, الابتكار والابداع, تطوير مهارات الكادر الفني والإداري بالمصنع
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[330px] shadow-xl max-sm:left-64">
              <p className="text-center text-lg">أهدافنا</p>
            </div>
            <div className="2xl:w-[550px] w-[442px] h-96 rounded-2xl p-9  2xl:text-xl text-lg bg-[#3A3535] inline-block text-white text-right max-sm:w-96">
              <p className="mt-2">رضا عملائنا , الجودة الفائقة الاحترافية, المصداقية والأمانة, الشفافية والوضوح, الابتكار والابداع, تطوير مهارات الكادر الفني والإداري بالمصنع  
            </p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[330px] shadow-xl max-sm:left-64">
              <p className="text-center text-lg">سياستنا الخاصة</p>
            </div>
            <div className="2xl:w-[550px] w-[442px] h-96 rounded-2xl  p-9 2xl:text-xl text-lg bg-[#3A3535] gap-5 text-white text-right flex flex-col max-sm:w-96">
            <p className='font-bold mt-5'>رضا عملائنا</p>
            <p className='text-sm'>المعيار الوحيد المعتمد لدينا هو رضا العملاء</p>
            <p className='font-bold'>التنمية</p>
            <p className='text-sm'>نسعى الى خلق بيئة عمل متجددة داخل المصنع ونهدف الى التحسين المستمر للمصنع وللموظفين</p>
            <p className='font-bold'>تحسين نطم الإدارة </p>
            <p className='text-sm'>الالتزام والمحافظة على العمل وفقا للأيزو 9001-2008 ونلتزم بالتطوير المستمر من خلال تحليل ملاحظات العملاء والمراجعة.</p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[330px] shadow-xl max-sm:left-64">
              <p className="text-center text-lg">رؤيتنا</p>
            </div>
            <div className="2xl:w-[550px] w-[442px] h-96 rounded-2xl p-9 2xl:text-xl text-lg bg-[#3A3535] inline-block text- text-white text-right max-sm:w-96">
              <p className="mt-2">التخطيط الناجح والتنفيذ الدقيق والأداء المبتكر والجودة العالية والمصداقية الكبيرة, هى رؤيتنا فى عملنا التي تعزز ريادتنا للخدمات المتكاملة فى مجال المقاولات العامة مع التزامنا على استدامة تنفيذ أعمالنا بكل دقة ومهنية واحترافية, مع مراعاة ثقة عملائنا الغالية, ونعمل على تقديم أفضل الخدمات لها بكل صدق وإخلاص وأمانة.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-8 mt-12">
        <h1 className="2xl:text-5xl text-4xl font-bold  relative 2xl:mb-10 max-sm:text-2xl">شهادات واعتمادات</h1>
      </div>
        <p className=" text-center mb-10 2xl:text-3xl text-2xl max-sm:text-lg max-sm:leading-9">مصنع نما طيبة حاصل على جميع الشهادات والاعتمادات من الجهات السعودية المختصة</p>
      <div className="flex justify-center flex-wrap 2xl:gap-48 2xl:gap-x-72 gap-x-52 gap-20 max-sm:gap-10 max-sm:gap-x-16  ">
        <img src={houselogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24"/>
        <img src={zakalogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24" />
        <img src={hrlogo} alt="image" className="w-52 h-44  max-sm:w-36 max-sm:h-24" />
        <img src={citylogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24"/>
        <img src={energylogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24"/>
        <img src={envlogo} alt="image" className="w-52 h-44 max-sm:w-36 max-sm:h-24" />
      </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
