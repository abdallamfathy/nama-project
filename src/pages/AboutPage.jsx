import React, { useEffect } from "react";
import { FaLessThan } from "react-icons/fa";
import { Footer, Navbar } from "../components";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";
import cert6 from "../assets/cert6.png";
import cert7 from "../assets/cert7.png";
import cert8 from "../assets/cert8.png";
import cert9 from "../assets/cert9.png";
import cert10 from "../assets/cert10.png";
import cert11 from "../assets/cert11.png";
import cert12 from "../assets/cert12.png";


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
        <div className="flex flex-row flex-wrap 2xl:gap-8 gap-8 justify-center">
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 2xl:left-96 left-72 shadow-xl">
              <p className="text-center text-lg">قيمنا</p>
            </div>
            <div className="2xl:w-[550px] w-[400px] rounded-2xl p-9 h-72 2xl:text-xl text-sm bg-[#3A3535] inline-block text-white text-right">
              <p className="mt-2">رضا عملائنا , الجودة الفائقة الاحترافية, المصداقية والأمانة, الشفافية والوضوح, الابتكار والابداع, تطوير مهارات الكادر الفني والإداري بالمصنع
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 2xl:left-96 left-72 shadow-xl">
              <p className="text-center text-lg">أهدافنا</p>
            </div>
            <div className="2xl:w-[550px] w-[400px] rounded-2xl p-9 h-72 2xl:text-xl text-sm bg-[#3A3535] inline-block text-white text-right ">
              <p className="mt-2">إيجاد بيئة عمل متكاملة, نستثمر من خلالها أعلى الكفاءات والخبرات البشرية, لمواكبة احتياجات ومتطلبات السوق السعودي والعربي بشكل عام. مع مسيرة التطوير والتنمية التي تشهدها المملكة بكافة مناحي الحياة والمجتمع ومصممون على التميز فى كل مجالات أعمالنا وفق فلسفة تنتهج الجودة المتكاملة باستخدام ما نملكه من قدرات فنية وموارد بشرية والاستعانة بأحدث ما توصلت اليه التكنولوجيا الحديثة من برامج.
              </p>
            </div>
          </div>
          <div>
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 2xl:left-96 left-72 shadow-xl">
              <p className="text-center text-lg">سياستنا الخاصة</p>
            </div>
            <div className="2xl:w-[550px] w-[400px] rounded-2xl  p-9 h-72 2xl:text-xl text-sm bg-[#3A3535] inline-block text-white text-right">
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
            <div className="bg-white text-[#FF7315] z-100 flex justify-center items-center p- 2xl:w-36 2xl:h-20 w-28 h-16 font-bold text-2xl text-center rounded-xl relative top-8 2xl:left-96 left-72 shadow-xl">
              <p className="text-center text-lg">رؤيتنا</p>
            </div>
            <div className="2xl:w-[550px] w-[400px] rounded-2xl p-9 h-72 2xl:text-xl text-sm bg-[#3A3535] inline-block text- text-white text-right ">
              <p className="mt-2">التخطيط الناجح والتنفيذ الدقيق والأداء المبتكر والجودة العالية والمصداقية الكبيرة, هى رؤيتنا فى عملنا التي تعزز ريادتنا للخدمات المتكاملة فى مجال المقاولات العامة مع التزامنا على استدامة تنفيذ أعمالنا بكل دقة ومهنية واحترافية, مع مراعاة ثقة عملائنا الغالية, ونعمل على تقديم أفضل الخدمات لها بكل صدق وإخلاص وأمانة.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center mt-24 ">
          <img src={cert4} alt="image" />
          <img src={cert5} alt="image" />
          <img src={cert6} alt="image" />
          <img src={cert7} alt="image" />
          <img src={cert8} alt="image" />
          <img src={cert9} alt="image" />
          <img src={cert10} alt="image" />
          <img src={cert11} alt="image" />
          <img src={cert12} alt="image" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
