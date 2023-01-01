import React, { useEffect } from 'react'
import { FaLessThan } from 'react-icons/fa'
import { Footer, Navbar, Order } from '../components'
import CartProduct from '../components/CartProduct'

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Navbar
        textColor="text-[#3A3535] border-b border-[#ff731573]"
        socialDisplay="hidden"
      />
    <div className='mx-20'>
    <div className="flex justify-end pb-20 mt-36 items-baseline gap-4">
          <h1 className="text-3xl font-bold text-[#FF7315]">شركاء النجاح</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535]">الرئيسية</h1>
        </div>
        <div className='flex justify-between'>
        <Order/>
        <div className='flex flex-col gap-1'>
        <CartProduct/>
        <hr className='w-[30rem] -translate-y-[3.3rem] border-t border-gray-600 ' />
        <CartProduct/>
        <hr className='w-[30rem] -translate-y-[3.3rem] border-t border-gray-600 ' />
        <CartProduct/>
        </div>
    </div>
      </div>    
    
    <Footer/>
    </>
  )
}

export default Cart