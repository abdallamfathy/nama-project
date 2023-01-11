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
      <div className="2xl:mx-20 mx-12 max-sm:m-5">
        <div className="flex justify-end mt-36 mb-10 items-baseline gap-4 max-sm:my-5">
          <h1 className="text-3xl font-bold text-[#FF7315] max-sm:text-2xl">الجودة</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535] max-sm:text-xl">الرئيسية</h1>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row justify-end flex-nowrap -6 ">
            <div className="flex flex-col w-[1000px] items-end gap-10">
              <div className="text-right">
          <h1 className="text-3xl font-bold text-[#FF7315] my-5 max-sm:text-2xl ">مميزات بركانى نما طيبة</h1>
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  مصادر انتاجنا
                </h1>
                <p className="">يُنتج مصنع نما طيبة أنواع عديدة من البلك البركاني باستخدام مواد بوزلانية خالية من الشوائب يتم جلبها من الجبال البركانية التي تشتهر بها منطقة المدينة المنورة وتكون مواد خام على هيئة بودرة بركانية وحصى بركاني مقاس ( 3/8 in ) وتنعكس جودتهما ومدى نقائهما على جودة البلك البركاني . وحرصاً منا في مصنع نما طيبة على تقديم منتجات عالية الجودة للعملاء، نقوم بانتقاء المواد الخام المستخدمة في التصنيع من مواد بوزلانية نقية وأسمنت مقاوم نختارها جميعها بعناية من أفضل المصادر والموردين لنتمكن وبثقة من توريد ما يحتاجه عملاؤنا في المملكة العربية السعودية من منتجات بركانية مهما كانت كمياتها وأنواعها وبأعلى ضمانات الجودة.


                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  سهولة التلييس
                </h1>
                <p className="">يمتاز البك البركانى بسطحه الخشن وهذا يساعد على تماسك اللياسة مع توفير أو الغاء عملية الطرطشة كما أن طبقة اللياسة تصبح أقل سماكة مما يوفر فى الأسمنت.
                </p>
              </div>
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  يقبل تركيب المسامير{" "}
                </h1>
                <p className="">يتحمل البلك البركاني عملية تركيب المسامير فى الجدران بكفاءة عالية خاصة عند تركيب المفصلات للأبواب والمسامير ولتثبيت الرخام والحجر
                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                العزل الحرارى{" "}
                </h1>
                <p className="">يمتاز البلك البركاني بانخفاض التوصيل الحرارى حيث لا يتجاوز قيمته (1.25) مما يكسبه ميزة العزل الحرارى الذى يمنع الى حد كبير من انتقال الحرارة من خارج المبنى الى داخله والعكس
                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  القوة والمتانة{" "}
                </h1>
                <p className="">نتيجة ارتفاع قوة الضغط المستخدمة فى التصنيع فان مقاومته للضغط عالية جدا
                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  خفيف الوزن
                </h1>
                <p className="">يعتبر أخف وزن بكثير من البلك الإسمنتي والبلك الطيني الحامل من نفس المقاس
                </p>
              </div>
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  سهولة التمديدات
                </h1>
                <p className="">يمكن قص البلك البركاني بدون أن ينكسر وتجرى التمديدات على الفجوة الخارجية مع المحتفظة على قوة البلك وعزله الحرارى                </p>
              </div>
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  مقاوم للملوحة
                </h1>
                <p className="">يصنع البلك من مادة البوزلان التي تستخدم كمادة أولية فى صناعة الأسمن البوزلانى المقاوم للملوحة مما يقلل من عملية التآكل
                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                  مقاوم للحريق
                </h1>
                <p className="">يعتبر من أفضل أنواع البلك على الاطلاق فى مقاومة النار واللهب المباشر حيث أن المادة الأولية هى مادة خاملة غير قابلة للاحتراق                </p>
              </div>

              <div className="text-right">
          <h1 className="text-3xl font-bold text-[#FF7315] my-5 max-sm:text-2xl ">الاختبارات</h1>
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                اختبار الضغط
                </h1>
                <p className="rtl">أظهرت نتائج الاختبارات للعينات المرسلة فوة ضغط فاقت ( Mpa 8 ) وهى نتيجة ممتازة جدا حيث تشترط هيئة المواصفات السعودية SASO بأن لا تقل اختبارات الضغط عن ( Mpa 4 )
                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">
                اختبار امتصاص الماء 
                </h1>
                <p className="" >ويجرى هذا الاختبار (معدل الامتصاصية) لكل من الأسطح الخارجية والداخلية حيث يتضمن الزيادة فى كتلة عينات البلك الناتجة عن امتصاص الماء ولأن البلك مسامى فهو قابل لامتصاص الرطوبة من الطقس كما له قابلية معاكسة اذا ارتفعت معدلات جفافه بحيث يسحب فى هذه العملية الماء من الخلطة الاسمنتية المستخدمة فى ربط وحداته أثناء البناء فيتسبب فى عدم كفاية الماء داخل الخلطة الإسمنتية وبالتالي يمنع التفاعل الهيدروليكي اللازم لصلابتها وهو ما قد يتسبب فى فشل هذه العملية ويقلل بشكل عام من قوة البناء مما يبرز أهمية هذا العامل بالنسبة للعميل . وبهذا الخصوص تجاوزت عيناتنا هذا الاختبار حيث كانت نسبة امتصاصها للماء أقل من 10% وتعد نسبة جيدة مقارنة بالبلك الخرساني التي تتجاوز نسبة امتصاصه للماء 15%
                </p>
              </div>
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6 max-sm:text-xl">اختبار مقاومة الحرائق{" "}
                </h1>
                <p className="">يستهدف اختبار مقاومة الحرائق تقييم المواد الداخلة فى تصنيع المنتجات التي تمنع أو تؤخر مرور درجات الحرارة العالية واللهب والغازات الساخنة تحت ظروف الاستخدام القياسية فيتم تحديد مقاومة تلك المواد فى المنتجات من خلال اختبار محدد للمقاومة عن طريق اجراء اختبارات مقاومة الحريق بقياس متانة مادة أو منتج فى اختبار المقاومة باستخدام معايير محددة قابلة للقياس ويتم الكشف عن وظيفة هيكلية لهذه المادة أو المنتج من خلال محاكاة أنواع معينة من الحرائق فى بيئات معملية متقدمة . وقد أظهرت النتائج بعد اختبار عيناتنا مقاومتها العالية للحريق حيث نجحت فى مقاومة السنة النار لما يقرب من 3 ساعات بفضل المواد الداخلة فى تصنيع البلك البركاني والمكونة من البوزلان الطبيعي العازل والمقاوم للحريق.
                </p>
            </div>
          </div>
          </div>

          {/* <div className="flex flex-row justify-end flex-nowrap ">
            <div className="flex flex-col w-[1000px]  gap-10 items-end">
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  يقبل تركيب المسامير{" "}
                </h1>
                <p className="">يتحمل البلك البركاني عملية تركيب المسامير فى الجدران بكفاءة عالية خاصة عند تركيب المفصلات للأبواب والمسامير ولتثبيت الرخام والحجر
                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  القوة والمتانة{" "}
                </h1>
                <p className="">نتيجة ارتفاع قوة الضغط المستخدمة فى التصنيع فان مقاومته للضغط عالية جدا
                </p>
              </div>
              <div className="text-right ">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  خفيف الوزن
                </h1>
                <p className="">يعتبر أخف وزن بكثير من البلك الإسمنتي والبلك الطيني الحامل من نفس المقاس
                </p>
              </div>
            </div>
          </div> */}

          {/* <div className="flex flex-row justify-end flex-nowrap my-6  ">
            <div className="flex flex-col w-[1000px] gap-10 items-end">
              <div className="text-right">
                <h1 className="text-3xl text-[#FF7135] font-semibold mb-6">
                  سهولة التمديدات
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
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default QualityPage;
