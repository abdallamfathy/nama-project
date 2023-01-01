import React, { useEffect } from "react";
import { FaLessThan } from "react-icons/fa";
import { Footer, Navbar } from "../components";
import cert1 from "../assets/cert1.png";

const QualityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar
        textColor="text-[#3A3535] border-b border-[#ff731573]"
        socialDisplay="hidden"
      />
      <div className="2xl:mx-20 mx-12 ">
        <div className="flex justify-end mt-36 mb-10 items-baseline gap-4">
          <h1 className="text-3xl font-bold text-[#FF7315]">الجودة</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535]">الرئيسية</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-end flex-nowrap -6 ">
            <div className="flex flex-col w-[1000px] items-end">
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  مصادر انتاجنا
                </h1>
                <p className="">يُنتج مصنع نما طيبة أنواع عديدة من البلك البركاني باستخدام مواد بوزلانية خالية من الشوائب يتم جلبها من الجبال البركانية التي تشتهر بها منطقة المدينة المنورة وتكون مواد خام على هيئة بودرة بركانية وحصى بركاني مقاس ( 3/8 in ) وتنعكس جودتهما ومدى نقائهما على جودة البلك البركاني . وحرصاً منا في مصنع نما طيبة على تقديم منتجات عالية الجودة للعملاء، نقوم بانتقاء المواد الخام المستخدمة في التصنيع من مواد بوزلانية نقية وأسمنت مقاوم نختارها جميعها بعناية من أفضل المصادر والموردين لنتمكن وبثقة من توريد ما يحتاجه عملاؤنا في المملكة العربية السعودية من منتجات بركانية مهما كانت كمياتها وأنواعها وبأعلى ضمانات الجودة.

                </p>
              </div>
              <div className="text-right mt-20">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  سهولة التلييس
                </h1>
                <p className="">يمتاز البك البركانى بسطحه الخشن وهذا يساعد على تماسك اللياسة مع توفير أو الغاء عملية الطرطشة كما أن طبقة اللياسة تصبح أقل سماكة مما يوفر فى الأسمنت.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end flex-nowrap -6 ">
            <div className="flex flex-col w-[1000px] items-end">
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  يقبل تركيب المسامير{" "}
                </h1>
                <p className="">يتحمل البلك البركاني عملية تركيب المسامير فى الجدران بكفاءة عالية خاصة عند تركيب المفصلات للأبواب والمسامير ولتثبيت الرخام والحجر
                </p>
              </div>
              <div className="text-right mt-28">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  القوة والمتانة{" "}
                </h1>
                <p className="">نتيجة ارتفاع قوة الضغط المستخدمة فى التصنيع فان مقاومته للضغط عالية جدا
                </p>
              </div>
              <div className="text-right mt-16">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  خفيف الوزن
                </h1>
                <p className="">يعتبر أخف وزن بكثير من البلك الإسمنتي والبلك الطيني الحامل من نفس المقاس
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-end flex-nowrap mb-6 ">
            <div className="flex flex-col w-[1000px] items-end">
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  سهولة التمديدات{" "}
                </h1>
                <p className="">يمكن قص البلك البركاني بدون أن ينكسر وتجرى التمديدات على الفجوة الخارجية مع المحتفظة على قوة البلك وعزله الحرارى                </p>
              </div>
              <div className="text-right mt-20">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  مقاوم للملوحة
                </h1>
                <p className="">يصنع البلك من مادة البوزلان التي تستخدم كمادة أولية فى صناعة الأسمن البوزلانى المقاوم للملوحة مما يقلل من عملية التآكل
                </p>
              </div>
              <div className="text-right mt-10">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  مقاوم للحريق
                </h1>
                <p className="">يعتبر من أفضل أنواع البلك على الاطلاق فى مقاومة النار واللهب المباشر حيث أن المادة الأولية هى مادة خاملة غير قابلة للاحتراق                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QualityPage;
