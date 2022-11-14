import React, { useState } from 'react'
import {FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
const Navbar = () => {

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Clients', href: '/about', current: false },
    { name: 'Projects', href: '/contact', current: false },
    { name: 'Contact', href: '/contact', current: false },
    
  ]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
    <div>
      <div className='h-5 mt-10 '>
        <nav className='flex items-center justify-around'>
          <div className='flex-1'>
            <h1 className='text-2xl font-bold'>Studio</h1>
          </div>
          <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <FaBars className="h-6 w-6" aria-hidden="true" />
              </button>
            </div> 
            <div className='hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-20'>
            {navigation.map((item) => (
                <a key={item.name} href={item.href} className="font-semibold text-gray-600 hover:text-gray-900">
                  {item.name}
                </a>
              ))}
          </div>
        </nav>

        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-10 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
               
                <div className="flex ">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-end rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>

      </div>
    </div>
    </>
  )
}

export default Navbar