import React from 'react'
import { FaLessThan } from 'react-icons/fa'
import { Navbar } from '../components'
import cert1 from '../assets/cert1.png'
import cert2 from '../assets/cert2.png'
import cert3 from '../assets/cert3.png'
import cert4 from '../assets/cert4.png'
import cert5 from '../assets/cert5.png'
import cert6 from '../assets/cert6.png'


const PartnersPage = () => {

  return (
            <>
              <Navbar textColor="text-[#3A3535]" socialDisplay="hidden"/>
                <div className='container mx-auto'>
                    <div className='flex justify-end my-20 items-baseline gap-4'>
                        
                    <h1 className='text-3xl text-[#FF7315]'>شركاء النجاح</h1>
                    <span ><FaLessThan/></span>
                    <h1 className='text-2xl text-[#3A3535]'>الرئيسية</h1>
                    </div>
                    <div className='flex flex-row flex-wrap justify- gap-6 '>
                     <img src={cert1} alt="image" />
                     <img src={cert2} alt="image" />
                     <img src={cert3} alt="image" />
                     <img src={cert4} alt="image" />
                     <img src={cert5} alt="image" />

                    </div>
                </div>
            </>
  )
}

export default PartnersPage