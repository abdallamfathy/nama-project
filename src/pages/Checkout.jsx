import React from 'react'
import { Footer, Navbar } from '../Components'
import ReactToPrint from 'react-to-print';
import { FaLessThan } from 'react-icons/fa';

const Checkout = () => {

  const printy = React.useRef();
  const printyButt = React.useRef();

  return (

    <>
      <Navbar
        textColor="text-[#3A3535] border-b border-[#ff731573]"
        socialDisplay="hidden"
      />
      <div className='m-20 '>
      <div className="flex justify-end py-20 items-baseline gap-4">
          <h1 className="text-3xl font-bold text-[#FF7315]">بيانات الطالب</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl  text-[#3A3535]">عربة التسوق</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535]">الرئيسية</h1>
        </div>
      <div className='flex justify-end my-10'>
      <h2 className='text-4xl font-bold text-[#FF7315]'>بيانات الطالب</h2>
      </div>
      <div className='flex justify-center gap-14 mt-24' ref={printy}>
                  
              

            <div className='flex flex-wrap gap-10 text-right w-[650px]'>
              <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>الاسم الأخير</h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>الاسم الأول</h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>المنطقة</h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>عنوان الحى</h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>الرمز البريدى </h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>المدينة</h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>العنوان بالتفصيل</h2>
                <input type="text" className='w-[620px] h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>رقم هاتف اخر</h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>رقم الهاتف</h2>
                <input type="text" className='w-72 h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
                <div className='flex flex-col gap-4'>
                <h2 className='text-lg 2xl:text-xl '>البريد الالكترونى</h2>
                <input type="text" className='w-[620px] h-[50px] border-none bg-gray-100 rounded-lg px-4 text-xl 2xl:text-[24px]'/>
                </div>
            </div>

    </div>
                <div className='flex justify-center items-center my-10'>
                <ReactToPrint
                trigger={() => <button className=' bg-[#FF7315] w-72  p-2 text-white rounded-md' ref={printyButt}>اتمام الطلب</button>}
                content={() => printy.current}
                />
                  
                  </div>
    </div>

      <Footer/>
    </>
  )
}

export default Checkout