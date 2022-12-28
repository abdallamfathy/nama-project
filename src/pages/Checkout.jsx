import React from 'react'
import { Footer, Navbar } from '../Components'
import arrowL from '../assets/images/arrowL.png'
import ReactToPrint from 'react-to-print';

const Checkout = () => {

  const printy = React.useRef();
  const printyButt = React.useRef();

  return (

    <>
      <Navbar/>
      <div className='m-20 '>
      <div className='flex text-right items-center gap-4 justify-end grow-0 flex-row'>
          <h2 className='text-3xl 2xl:text-[42px] font-bold text-primary'>بيانات الطالب</h2>
          <img src={arrowL} alt="<" className='h-full ' />
          <h2 className='text-3xl 2xl:text-[42px]'>عربة التسوق</h2>
          <img src={arrowL} alt="<" className='h-full ' />
        <h2 className='text-3xl 2xl:text-[42px]'>الرئيسية</h2>
      </div>
      <div className='flex justify-end my-10'>
      <h2 className='text-3xl 2xl:text-[42px] font-bold text-primary'>بيانات الطالب</h2>
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
                trigger={() => <button className=' bg-[#6E1E13] w-72  p-2 text-white rounded-md' ref={printyButt}>اتمام الطلب</button>}
                content={() => printy.current}
                />
                  
                  </div>
    </div>

      <Footer/>
    </>
  )
}

export default Checkout