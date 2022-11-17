import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import { Navbar } from '../components'

const PartnersPage = () => {

  return (
            <>
              <Navbar textColor="text-[#3A3535]" socialDisplay="hidden"/>
                <div className='container mx-auto'>
                    <div className='flex justify-end mt-16 items-baseline gap-4'>
                        
                    <h1 className='text-3xl text-[#FF7315]'>شركاء النجاح</h1>
                    <span className='font-extralight'><FaLessThan/></span>
                    <h1 className='text-2xl text-[#3A3535]'>الرئيسية</h1>
                    </div>
                    <div className='flex flex-row gap-6'>
                        <img src={} alt="" />
                    </div>
                </div>
            </>
  )
}

export default PartnersPage