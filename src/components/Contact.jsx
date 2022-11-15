import React from 'react'
import location from '../assets/location.png'
import message from '../assets/message.png'
import call from '../assets/call.png'

const Contact = () => {
  return (
    <div className='my-20 container'>
          <div className='flex justify-center mb-14'>
        <h1 className='text-4xl font-bold'>اتصل بنا</h1>
        </div>
        <div className='flex justify-end  mr-12'>
        <div className='flex justify-end flex-col items-end gap-10'>
          <p className='text-right'>الادارة : المدينة المنورة - شارع الملك عبد العزيز - مبنى الخمرى بلازا - الدور السابع - مكتب 13 <br /> المصنع : المنطقة الصناعية الجديدة  مدن شارع (63)</p>
        <a href='#' className=' underline relative bottom-3'>Nama-sales@khomrigroup.com</a>
        <p className='relative bottom-1'>0555301707 - 0500361234</p>
        </div>
        <div className='flex flex-col items-center justify-center ml-6 gap-10'>
          <div><img src={location} alt="location"/></div>
          <div><img src={message} alt="message"/></div>
          <div><img src={call} alt="call"/></div>
        </div>
        </div>
    </div>
  )
}

export default Contact