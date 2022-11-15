import React from 'react'
import logo from '../assets/logo.png'
import location from '../assets/location.png'
import message from '../assets/message.png'
import call from '../assets/call.png'

const Footer = () => {
  return (
    <>
      <div className='bg-[#3A3535] container mx-auto  grid  grid-cols-4 justify-end text-white '>
          <div className='col-span-1'>
            aboody
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
          <div className=' mt-14   flex-col p-4 col-span-2 items-end flex'>
            <img src={logo} alt="logo" className='mr-6' /> 
            <p className='text-right p-6 pl-16 leading-9'>يعد مصنع نما طيبة للمنتجات األسمنتية من المصانع لوك ( ي الرائدة ف وتم تأسيسه يل عام 2016 بهيئة مدن الصناعية بالمدينة المنورة ، مستوي من الكفاءة والجوده لضمان يل اع حيث يمتلك خطوط انتاج ع يل توفرت احتياجات بالقدرة ع خروج منتج عاىل الجودة لتلبية احتياجات السوق طبقا للمواصفات القياسية ، حيث اننا نتمرت ن عمالئنا الكرام بالكميات المط المتفق عليه مع العميل
          </p>
          </div>
      </div>
    </>
  )
}

export default Footer