import { Carousel } from 'flowbite-react'
import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Slider = () => {
  return (
    <div className="h-screen">
        
    <Carousel className='-mt-16 -z-50'>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <img src={img1} alt="asd" />
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