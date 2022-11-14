import React from 'react'
import brick1 from '../assets/brick1.png'

const Products = () => {
  return (
    <div className='mb-56 ml-20'>
      <div className=" flex flex-col justify-center items-center w-[317px] h-[354px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
    <a href="#">
        <img className="-my-10 " src={brick1} alt="asd" />
    </a>
    <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] ">
        <p>النوع :3 فتحات</p>
        <p class=" ">
المقاس : 20 × 20 × 40
</p>
<p>لون الشريحة : بدون</p>
       
    </div>
</div>
    </div>
  )
}

export default Products