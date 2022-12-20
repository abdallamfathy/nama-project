import React, { useEffect } from "react";
import { FaLessThan } from "react-icons/fa";
import { Footer, Navbar } from "../components";
import exlogo from "../assets/ex-logo.png";
import inlogo from  "../assets/in-logo.png";
import hrlogo from "../assets/hr-logo.png"
import justicelogo from "../assets/justice-logo.png"
import citylogo from "../assets/cities-logo.png"
import houselogo from "../assets/house-logo.png"
import tradelogo from "../assets/trade-logo.png"
import energylogo from "../assets/energy-logo.png"


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
      <div className="mx-20">
        <div className="flex justify-end py-20 items-baseline gap-4">
          <h1 className="text-3xl font-bold text-[#FF7315]">من نحن</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535]">الرئيسية</h1>
        </div>
        <div className="text-right flex flex-col mb-12">
          <h1 className="2xl:text-3xl text-xl text-[#FF7315] mb-4">نبذة عن المصنع</h1>
          <p className="2xl:text-2xl text-lg text-[#3A3535]">يعد مصنع نما طيبة من المصانع الرائدة فى مجال البلوكات الإسمنتية ( بلوك - انتر لوك ) حيث يمتلك حطوط انتاج على أعلى مستوى من الكفاءة والجودة لضمان خروج منتج عالي الجودة لتلبية احتياجات عملائنا الكرام بالكمية المطلوبة طبقا للجدول الزمنى المتفق عليه مع العميل ويقع مصنع نما طيبة للمنحات الاسمنتية بموقع متميز لضمان تغطية أكبر لجميع عملائنا ونسعى لفتح فروع أخرى لتلبية احتياجات عملائنا بباقي مناطق المملكة 

          </p>
        </div>
        <div className="flex flex-row flex-wrap 2xl:gap-8 gap-16 justify-center">
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[400px] shadow-xl">
              <p className="text-center text-lg">قيمنا</p>
            </div>
            <div className="2xl:w-[550px] w-[500px] rounded-2xl p-9 h-72 2xl:text-xl text-lg bg-[#3A3535] inline-block text-white text-right">
              <p className="mt-2">رضا عملائنا , الجودة الفائقة الاحترافية, المصداقية والأمانة, الشفافية والوضوح, الابتكار والابداع, تطوير مهارات الكادر الفني والإداري بالمصنع
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[400px] shadow-xl">
              <p className="text-center text-lg">أهدافنا</p>
            </div>
            <div className="2xl:w-[550px] w-[500px] rounded-2xl p-9 h-72 2xl:text-xl text-lg bg-[#3A3535] inline-block text-white text-right ">
              <p className="mt-2">إيجاد بيئة عمل متكاملة, نستثمر من خلالها أعلى الكفاءات والخبرات البشرية, لمواكبة احتياجات ومتطلبات السوق السعودي والعربي بشكل عام. مع مسيرة التطوير والتنمية التي تشهدها المملكة بكافة مناحي الحياة والمجتمع ومصممون على التميز فى كل مجالات أعمالنا وفق فلسفة تنتهج الجودة المتكاملة باستخدام ما نملكه من قدرات فنية وموارد بشرية والاستعانة بأحدث ما توصلت اليه التكنولوجيا الحديثة من برامج.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[400px] shadow-xl">
              <p className="text-center text-lg">سياستنا الخاصة</p>
            </div>
            <div className="2xl:w-[550px] w-[500px] rounded-2xl  p-9 h-72 2xl:text-xl text-lg bg-[#3A3535] inline-block text-white text-right">
              <p className="mt-2">رضا عملائنا
المعيار الوحيد المعتمد لدينا هو رضا العملاء
التنمية
نسعى الى خلق بيئة عمل متجددة داخل المصنع ونهدف الى التحسين المستمر للمصنع وللموظفين
تحسين نطم الإدارة 
الالتزام والمحافظة على العمل وفقا للأيزو 9001-2008 ونلتزم بالتطوير المستمر من خلال تحليل ملاحظات العملاء والمراجعة.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 left-[400px] shadow-xl">
              <p className="text-center text-lg">رؤيتنا</p>
            </div>
            <div className="2xl:w-[550px] w-[500px] rounded-2xl p-9 h-72 2xl:text-xl text-lg bg-[#3A3535] inline-block text- text-white text-right ">
              <p className="mt-2">التخطيط الناجح والتنفيذ الدقيق والأداء المبتكر والجودة العالية والمصداقية الكبيرة, هى رؤيتنا فى عملنا التي تعزز ريادتنا للخدمات المتكاملة فى مجال المقاولات العامة مع التزامنا على استدامة تنفيذ أعمالنا بكل دقة ومهنية واحترافية, مع مراعاة ثقة عملائنا الغالية, ونعمل على تقديم أفضل الخدمات لها بكل صدق وإخلاص وأمانة.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center my-9">
        <h1 className="2xl:text-4xl text-3xl font-bold  relative 2xl:mb-10 mt-14">شهادات واعتمادات</h1>
      </div>
        <p className="text-right mb-10 2xl:mr-60 2xl:text-xl text-lg ">مصنع نما طيبة حاصل على جميع الشهادات والاعتمادات من الجهات السعودية المختصة</p>
        <div className="flex justify-center flex-wrap 2xl:gap-44 gap-x-36 gap-20  mt-24 ">
        <img src={inlogo} alt="image" className="w-52 h-44" />
        <img src={hrlogo} alt="image"  className="w-52 h-44" />
        <img src={exlogo} alt="image" className="w-52 h-44" />
        <img src={justicelogo} alt="image" className="w-52 h-44"/>
        <img src={houselogo} alt="image"  className="w-52 h-44"/>
        <img src={tradelogo} alt="image"  className="w-52 h-44"/>
        <img src={energylogo} alt="image"  className="w-52 h-44"/>
        <img src={citylogo} alt="image"  className="w-52 h-44"/>

      </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
