import React from 'react'
import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'
import cert3 from '../assets/cert3.png'
import Button from './Button'

const Partners = () => {
  return (
    <div>
        <div className='flex justify-center my-8'>
            <h1 className='text-4xl font-bold  relative '>شركاء النجاح</h1>
        </div>
        <div className='flex justify-center '>
            <img src={cert3} alt="image" />
            <img src={cert2} alt="image" />
            <img src={cert1} alt="image" />
        </div>
        <Button text={"عرض المزيد"}/>
    </div>
  )
}

export default Partners