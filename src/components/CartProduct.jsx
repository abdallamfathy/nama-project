import React from 'react'
import img9 from '../assets/brick9.png'
import gurante from "../assets/gurante.png"
import code from "../assets/code.png"

import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    EffectFade,
    Autoplay,
  } from "swiper";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "swiper/css";
  import "swiper/css/pagination";
  import "swiper/css/navigation";
  import "swiper/css/effect-fade";
  import "../index.css";

const CartProduct = () => {
    const [count, setCount] = React.useState(1)
    const increase = () => {
        setCount(count + 1)
    }
    const decrease = () => {
        setCount(count - 1)
    }

  return (
    <>
    <div className='flex gap-4 justify-end items-center'>
    <div className='flex flex-col items-center gap-1 mt-6 mr-36'>
            <div className='flex gap-1'>
                <button className='text-white rounded-md  bg-[#FF7315] px-2' onClick={() => decrease()}><p className='-translate-y-1.5'>_</p></button>
                <span className='border border-gray-400 rounded-md px-2'>{count}</span>
                <button className='text-white rounded-md  bg-[#FF7315] px-2' onClick={() => increase()}>+</button>
            </div>
            <p>الاجمالى</p>
            <p className='font-bold'>3 ر.س</p>
        </div>
            <div className='flex flex-col gap-2 text-right'>
                <p>بلوك حرف U</p>
                <p>مقاس 20×20×20</p>
                <p className='bg-[#FF7315] px-1 text-white'>يستخدم فى تمديدات السباكة</p>
            </div>
            
        <div className=' w-64 '>
        <div className="flex justify-between gap-[140px] absolute z-40">
            <img src={gurante} alt="gurante" className="object-contain w-16"/>
            <img src={code} alt="code" className="object-contain w-12"/>
          </div>
        <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
          background: "red",
        }}
        effect={"fade"}
        navigation
        // speed={2500}
        // autoplay={{ delay: 1500, disableOnInteraction: false }}
        
      >
        <SwiperSlide>
        <div className=" h-64 pt-1 w-full flex justify-center items-center  "> 
        <img
                className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out 2xl:hover:left-20  absolute 2xl:left-24  2xl:top-12   hover:w-44  w-28 h-36 hover:h-36  rotate-90 object-contain"
                src={img9}
                alt="productImage"
              />        
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" h-52 w-full flex justify-center items-end  "> 
        <img
                className="transition duration-[2000]  delay-300 hover:transition-all ease-out 2xl:hover:left-20  absolute    hover:w-44  w-28 h-36 hover:h-36 object-contain"
                src={img9}
                alt="productImage"
              />

        </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
      <div className="bg-[#3A3535] text-xs translate-y-[4.25rem] -translate-x-48 absolute z-40 py-1 w-16  text-center text-white ">
                <h2>30010015</h2>
              </div>
    </div>
    </>
  )
}

export default CartProduct;