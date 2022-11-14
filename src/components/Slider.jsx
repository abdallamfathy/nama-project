import { Carousel } from 'flowbite-react'
import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Slider = () => {
  return (
    <div className="h-screen">
        
        <h1 className='text-white z-100 top-96 relative text-center  text-6xl font-bold'>
            خصم يبدأ من <span className='text-[#FF7315]'>%15</span> ويصل الى <span className='text-[#FF7315]'>%30</span></h1>
    <Carousel className='-mt-32 -z-50'>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={img1} alt="asd" className='' />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src={img2} alt="asd" />
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
      <img src={img3} alt="asd" />
      </div>
    </Carousel>
  </div>
  )
}

export default Slider