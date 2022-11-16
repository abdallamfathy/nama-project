import { Carousel } from 'flowbite-react'
import React from 'react'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'

const Slider = () => {
  return (
    <div className="h-[103vh] -ml-1">
        
        <h1 className='text-white z-100 top-[420px] relative text-center  text-6xl font-bold'>
            خصم يبدأ من <span className='text-[#FF7315]'>%15</span> ويصل الى <span className='text-[#FF7315]'>%30</span></h1>
    <Carousel 
    leftControl=" "
    rightControl=" "
    
    className='-mt-32 -z-50 '>
      <div className="object-cover duration-1000 ease-in ">
        <img src={img1} alt="image" className='object-contain pt-14' />
      </div>
      <div className="">
      <img src={img2} alt="image"  className='object-contain pt-14'/>
      </div>
      <div className="">
      <img src={img3} alt="image"  className='object-contain pt-14'/>
      </div>
    </Carousel>
  </div>
  )
}

export default Slider