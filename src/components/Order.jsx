import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <>
        <div className='w-72 h-80 shadow-2xl text-black bg-white px-10 py-5 flex flex-col rounded-lg'>
            <div className='flex flex-col items-center text-right text-sm gap-5'>
                <p className='self-end'>تلخيص الطلب</p>
                <div className='flex gap-4 justify-end'>
                    <button className='bg-gray-100 rounded-md p-2 hover:bg-[#FF7315] hover:text-white'>تأكيد</button>
                    <input  className='bg-gray-100 rounded-md w-36 text-right placeholder:text-black placeholder:text-sm border-none ' type="text" placeholder='كود خصم' />
                </div>
            </div>
            <hr className='w-52 my-4 border-t border-gray-600 ' />

            <div className='flex flex-col  text-right text-sm gap-2'>
                <div className='flex justify-between'>
                    <p>9 ر.س</p>
                    <p>الاجمالى</p>
                </div>
                <div className='flex justify-between'>
                    <p>1 ر.س</p>
                    <p>الخصم</p>
                </div>
        </div>
        <hr className='w-52 my-4 border-t border-gray-600 ' />
        <div className='flex justify-between text-sm font-semibold'>
                    <p>8 ر.س</p>
                    <p>الاجمالى</p>
                </div>
        <div className='flex justify-center mt-7'>
            <Link href="/checkout"><button className='p-1 px-8 bg-[#FF7315] rounded-lg text-white text-sm  hover:text-black'>ملئ بيانات الطالب</button></Link>
        </div>
        </div>
    </>
  )
}

export default Order