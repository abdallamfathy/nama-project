import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import { Navbar } from '../components'

const AboutPage = () => {
  return (
<>
              <Navbar textColor="text-[#3A3535] border-b border-[#ff731573]" socialDisplay="hidden"/>
                <div className='container mx-auto'>
                    <div className='flex justify-end my-20 items-baseline gap-4'>
                        
                    <h1 className='text-3xl text-[#FF7315]'>من محن</h1>
                    <span ><FaLessThan/></span>
                    <h1 className='text-2xl text-[#3A3535]'>الرئيسية</h1>
                    </div>
                   <div className='text-right flex flex-col mb-12'>
                    <h1 className='text-3xl text-[#FF7315] mb-4'>نبذة عن المصنع</h1>
                    <p className='text-2xl text-[#3A3535]'>يعد مصنع نما طيبة من المصانع الرائدة فى مجال البلوكات اأسمنتية ( بلوك - انتر لوك ) حيث يمتلك حطوط انتاج على أعلى مستوى من الكفائة والجودة لضمان خروج منتج عالى الجودة لتلبية احتياجات عملائنا الكرام بالكمية المطلوبة طبقا للجدول الزمنى المتفق عليه مع العميل ويقع مصنع نما طيبة للمنحات الاسمنتية بموقع متميز لضمان تغطية أكبر لجميع عملائنا ونسعى لفتح فروع أخرى لتلبية احتياجات عملائنا بباقى مناطق المملكة </p>
                   </div>
                    <div className='flex flex-row flex-wrap gap-8 justify-center'>
                        <div>
                            <div className='bg-white text-[#FF7315] z-100 flex justify-center items-center p- w-36 h-20 font-bold text-2xl text-center rounded-xl relative top-8 left-96 shadow-xl'><p className='text-center'>قيمنا</p></div>
                            <div className='w-[550px] rounded-2xl p-9 h-72 text-xl bg-[#3A3535] inline-block text-white text-right'>
                                <p className='mt-2'>رضا عملائنا , الجودة الفائقة الاحترافية, المصداقية والأمانة, الشفافية والوضوح, الابتكار والابداع, تطوير مهارات الكادر الفنى والادارى بالمصنع</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-white text-[#FF7315] z-100 flex justify-center items-center p- w-36 h-20 font-bold text-2xl text-center rounded-xl relative top-8 left-96 shadow-xl'><p className='text-center'>أهدافنا</p></div>
                            <div className='w-[550px] rounded-2xl p-9 h-72 text-xl bg-[#3A3535] inline-block text-white text-right '><p className='mt-2'>
                            ايجاد بيئة عمل متكاملة, نستثمر من خلالها أعلى الكفائات والخبرات البشرية, لمواكبة احتياجات ومتطلبات السوق السعودى والعربى بشكل عام. مع مسيرة ااتطوير والتنمية التى تشهدها المملكة بكافة مناحى الحياة والمجنمع ومصممون على التميز فى كل مجالات أعمالنا وفق فلسفة تنتهج الجودة المتكاملة باستخدام ما نملكه من قدرات فنية وموارد بشرية والاستعانة بأحدث ما توصلت اليه التكنولوجيا الحديثة من برامج
                            .</p></div>
                        </div>
                        <div>
                            <div className='bg-white text-[#FF7315] z-100 flex justify-center items-center p- w-36 h-20 font-bold text-2xl text-center rounded-xl relative top-8 left-96 shadow-xl'><p className='text-center'>سياستنا الخاصة</p></div>
                            <div className='w-[550px] rounded-2xl p-9 h-72 text-xl bg-[#3A3535] inline-block text-white text-right'>
                                <p className='mt-2'>رضا عملائنا
                                المعيار الوحيد المعتمد لدينا هو رضا العملاء 
                                التنمية     
                                نسعى الى خلق بيئة عمل متجددة داخل المصنع ونهدف الى التحسين المستمر للمصنع وللموظفين
                                تحسين نطم الادارة 
                                الالتزام والمحافظة على العمل وفقا للايزو 9001-2008 ونلتزم بالتطوير المستمر من خلال تحليل ملاحظات العملاء والمراجعة.</p>
                            </div>
                        </div>
                        <div>
                            <div className='bg-white text-[#FF7315] z-100 flex justify-center items-center p- w-36 h-20 font-bold text-2xl text-center rounded-xl relative top-8 left-96 shadow-xl'><p className='text-center'>رؤيتنا</p></div>
                            <div className='w-[550px] rounded-2xl p-9 h-72 text-xl bg-[#3A3535] inline-block text-white text-right '><p className='mt-2'>
                            التخطيط الناجح والتنفيذ الدقيق والأداء المبتكر والجودة العالية والمصداقية الكبيرة, هى رؤيتنا فى عملنا التى تعزز ريادتنا للخدمات المتكاملة فى مجال المقاولات العامة مع التزامنا على استداة تنفيذ أعمالنا بكل دقة ومهنية واحترافية, مع مراعاة ثقة عملائنا الغالية, ونعمل على تقديم أفضل الخدمات لها بكل صدق واخلاص وأمانة.
                        </p></div>
                        </div>
                    </div>
                    
                </div>
            </>  )
}

export default AboutPage