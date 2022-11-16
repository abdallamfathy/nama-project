import React from 'react'
import logo from '../assets/logo.png'
import location from '../assets/location.png'
import message from '../assets/message.png'
import call from '../assets/call.png'
import { Link } from 'react-scroll'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'



const Footer = () => {
  return (
    <div className='bg-[#3A3535]'>
       <div className=' mt-6  container mx-auto grid  grid-cols-5 justify-end text-white '>
          <div className='col-span-1 flex-col items-end flex '>
          <h1 className='text-3xl font-bold relative  my-8'>خريطة الموقع</h1>
              <div className='flex flex-col'>
                <div className='flex gap-6 flex-wrap justify-end mb-8'>
                  <Link to="/" className='underline'>من نحن</Link>
                  <Link to="/" className='underline'>منتجاتنا</Link>
                  <Link to="/" className='underline'>الرئيسية</Link>
                  <Link to="/" className='underline'>شركاء النجاح</Link>
                  <Link to="/" className='underline'>الجودة</Link>
                </div>
                <div className='flex justify-end gap-3'>
                  <img src={facebook} alt="facebook" />
                  <img src={twitter} alt="twitter" />
                  <img src={instagram} alt="instagram" />
                  <img src={linkedin} alt="linkedin" />
                  <img src={whatsapp} alt="whatsapp" />
                </div>
              </div>
          </div>
          <div className='col-span-2 columns-3 flex-col items-end flex '>
            <h1 className='text-3xl font-bold relative right-6 my-8'>اتصل بنا</h1>
            <div className='grid grid-flow-row  grid-cols-4  relative left-14 row-start-3 '>
              <p className='col-span-3 w-80 relative right-4 '>الادارة : المدينة المنور ة - شارع الملك عبد العزيز - مبنى الخمرى بلازا - الدور السابع - مكتب 13</p>
              <img src={location} alt="location" className=' col-span-1 left-1 relative' />
            </div>
           <p className='relative right-[74px] mb-5 mt-2'>المصنع : المنطقة الصناعية الجديدة - مدن شارع (63)</p>
           <div className='grid grid-flow-row  grid-cols-4  relative left-6 row-start-3 mb-6'>
              <a className='col-span-3 pr-6 '>Nama-sales@khomrigroup.com</a>
              <img src={message} alt="message" className='relative left-2 col-span-1 ' />
            </div>
            <div className='grid grid-flow-row  grid-cols-4  relative left-4 row-start-3 my-4 pb-8 '>
              <a className='col-span-3 pr-6 '>0555301707 - 0500361234</a>
              <img src={call} alt="call" className='relative left-2 col-span-1 ' />
            </div>
          </div>
          <div className=' mt-14   flex-col p-4  col-span-2 items-end flex'>
            <img src={logo} alt="logo" className='mr-6' /> 
            <p className='text-right text-[16px]    leading-9'>يعد مصنع نما طيبة للمنتجات األسمنتية من المصانع لوك ( ي الرائدة ف وتم تأسيسه يل عام 2016 بهيئة مدن الصناعية بالمدينة المنورة ، مستوي من الكفاءة والجوده لضمان يل اع حيث يمتلك خطوط انتاج ع يل توفرت احتياجات بالقدرة ع خروج منتج عاىل الجودة لتلبية احتياجات السوق طبقا للمواصفات القياسية ، حيث اننا نتمرت ن عمالئنا الكرام بالكميات المط المتفق عليه مع العميل
          </p>
          </div>
      </div> 
    </div>
  )
}

export default Footer


{/* <div className='bg-[#3A3535] mt-6   grid  grid-cols-4 justify-end text-white '>
          <div className='col-span-1 flex-col items-end flex '>
          <h1 className='text-3xl font-bold relative  my-8'>خريطة الموقع</h1>

          </div>
          <div className='col-span-1 columns-3 flex-col items-end flex w-96'>
            <h1 className='text-3xl font-bold relative right-6 my-8'>اتصل بنا</h1>
            <div className='grid grid-flow-row  grid-cols-4  relative left-12 row-start-3 '>
              <p className='col-span-3 w-80 relative right-10 pr-4'>الادارة : المدينة المنور ة - شارع الملك عبد العزيز - مبنى الخمرى بلازا - الدور السابع - مكتب 13</p>
              <img src={location} alt="location" className=' col-span-1 ' />
            </div>
           <p className='relative right-[74px] mb-5 mt-2'>المصنع : المنطقة الصناعية الجديدة - مدن شارع (63)</p>
           <div className='grid grid-flow-row  grid-cols-4  relative left-6 row-start-3 mb-6'>
              <a className='col-span-3 pr-6 '>Nama-sales@khomrigroup.com</a>
              <img src={message} alt="message" className='relative left-2 col-span-1 ' />
            </div>
            <div className='grid grid-flow-row  grid-cols-4  relative left-4 row-start-3 my-4 pb-8 '>
              <a className='col-span-3 pr-6 '>0555301707 - 0500361234</a>
              <img src={call} alt="call" className='relative left-2 col-span-1 ' />
            </div>
          </div>
          <div className=' mt-14   flex-col p-4  col-span-2 items-end flex'>
            <img src={logo} alt="logo" className='mr-6' /> 
            <p className='text-right text-[16px]    leading-9'>يعد مصنع نما طيبة للمنتجات األسمنتية من المصانع لوك ( ي الرائدة ف وتم تأسيسه يل عام 2016 بهيئة مدن الصناعية بالمدينة المنورة ، مستوي من الكفاءة والجوده لضمان يل اع حيث يمتلك خطوط انتاج ع يل توفرت احتياجات بالقدرة ع خروج منتج عاىل الجودة لتلبية احتياجات السوق طبقا للمواصفات القياسية ، حيث اننا نتمرت ن عمالئنا الكرام بالكميات المط المتفق عليه مع العميل
          </p>
          </div>
      </div> */}








      // <div className='flex flex-row  col-span-3 bg-gray-500'>
      //  <div className=' flex-col items-end flex '>
      //     <h1 className='text-3xl font-bold   my-8'>خريطة الموقع</h1>
            

      //     </div>
      //    <div>
      //    <div className='flex justify-center mb-6'>
      //   <h1 className='text-3xl font-bold'>اتصل بنا</h1>
      //   </div>
      //   <div className='flex justify-end w-96 relative left-36 '>
      //   <div className='flex justify-end flex-col items-end gap-10'>
      //     <p className='text-right'>الادارة : المدينة المنورة - شارع الملك عبد العزيز - مبنى الخمرى بلازا - الدور السابع - مكتب 13 <br /> المصنع : المنطقة الصناعية الجديدة  مدن شارع (63)</p>
      //   <a href='#' className=' underline relative bottom-3'>Nama-sales@khomrigroup.com</a>
      //   <p className='relative bottom-1'>0555301707 - 0500361234</p>
      //   </div>
      //   <div className='flex flex-col items-center justify-center ml-6'>
      //     <div><img src={location} alt="location"/></div>
      //     <div><img src={message} alt="message"/></div>
      //     <div><img src={call} alt="call"/></div>
      //   </div>
      //   </div>
      //    </div>
      //     <div className=' mt-14 flex-col p-4  items-end flex'>
      //       <img src={logo} alt="logo" className='mr-6' /> 
      //       <p className='text-right text-[16px]  leading-9'>يعد مصنع نما طيبة للمنتجات األسمنتية من المصانع لوك ( ي الرائدة ف وتم تأسيسه يل عام 2016 بهيئة مدن الصناعية بالمدينة المنورة ، مستوي من الكفاءة والجوده لضمان يل اع حيث يمتلك خطوط انتاج ع يل توفرت احتياجات بالقدرة ع خروج منتج عاىل الجودة لتلبية احتياجات السوق طبقا للمواصفات القياسية ، حيث اننا نتمرت ن عمالئنا الكرام بالكميات المط المتفق عليه مع العميل
      //     </p>
      //     </div>
      //  </div>