import React from 'react'
import logo from '../assets/logo.png'
import location from '../assets/location.png'
import message from '../assets/message.png'
import call from '../assets/call.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
import { Link } from 'react-router-dom'



const Footer = () => {
  return (
    <div className='bg-[#3A3535]'>
       <div className=' mt-6  container mx-auto grid  grid-cols-5 justify-end text-white '>
          <div className='col-span-1 flex-col items-end flex '>
          <h1 className='text-3xl font-bold relative  my-8'>خريطة الموقع</h1>
              <div className='flex flex-col'>
                <div className='flex gap-6 flex-wrap justify-end mb-8'>
                  <Link to="/about" className='underline'>من نحن</Link>
                  <Link to="/products" className='underline'>منتجاتنا</Link>
                  <Link to="/" className='underline'>الرئيسية</Link>
                  <Link to="/partners" className='underline'>شركاء النجاح</Link>
                  <Link to="/quality" className='underline'>الجودة</Link>
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
            <p className='text-right text-[16px]    leading-9'>يعد مصنع نما طيبة للمنتجات األسمنتية من المصانع  الرائدة فى مجال البلكات الأسمنتية وتم تأسيسه عام 2016 بهيئة مدن الصناعية بالمدينة المنورة ، مستوي من الكفاءة والجوده لضمان خروج منتج عالى الجودة 
          </p>
          </div>
      </div> 
    </div>
  )
}

export default Footer


