import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../assets/logo.png'
import lang from '../assets/lang.png'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'

const Navbar = () => {

  const navigation = [
    { name: 'اتصل بنا', href: '/', current: false },
    { name: 'من نحن', href: '/', current: false },
    { name: 'أعمالنا', href: '/about', current: false },
    { name: 'منتجاتنا', href: '/contact', current: false },
    { name: 'الرئيسية', href: '/contact', current: true },
    
  ]
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    <div>
      <div className='h-5 mt-10 '>
        <nav className='flex items-start justify-around text-white '>

            <div className='flex flex-col gap-y-4 mr-6'>
                <img src={lang} alt="language"  className='mb-6 w-[33px] h-[33px]'/>
                <img src={facebook} alt="facebook"  />
                <img src ={whatsapp} alt="whatsapp"  />
                <img src={linkedin} alt="linkedin"    />
                <img src={instagram} alt="instagram"  />
                <img src={twitter} alt="twitter" />
            </div>

            <div className='hidden lg:flex lg:flex-1 lg:justify-start lg:gap-x-5'>
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className={`font-semibold  hover:text-[#FF7315] ${item.current && "text-[#FF7315] "} `}>
                  {item.name}
                </a>
              ))}
          </div>

          <div className='flex -mt-2'>
            <form className='mr-4'>   
                <div class="relative">
                    <div class="flex absolute inset-y-0 right-0 items-center pr-6 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-[#FF7315] " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" class="block p-4 pr-10 w-[310px] h-[50px] text- indent-48 text-sm text-gray-900 bg-gray-50 rounded-lg border " placeholder="...بحث" required=""/>
                    
                </div>
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            </form>
            <img src={logo} alt="asd" />

          </div>
          
        </nav>

      </div>
    </div>
    </>
  )
}

export default Navbar