import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo24.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaSnapchat,
  FaWindowClose,
} from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { productDetails, products } from "./Constants";
import chat from "../assets/chat.png";
import Chat from "./Chat";
import downar from "../assets/downar24.png";
import whatsapp from "../assets/whatsapp.png";
import cart from '../assets/cart24.png'


const Navbar = ({ textColor, socialDisplay }) => {
  const params = useParams();

  const navigation = [
    { name: "العروض", href: "/product/discount", current: false },
    { name: "شركاء النجاح", href: "/partners", current: false },
    { name: "الجودة", href: "/quality", current: false },
    { name: "من نحن", href: "/about", current: false },
    { name: "منتجاتنا", href: "/products", current: false },
    { name: "الرئيسية", href: "/", current: true },
  ];
  const navigationMob = [
    { name: "الرئيسية", href: "/", current: true },
    { name: "منتجاتنا", href: "/products", current: false },
    { name: "من نحن", href: "/about", current: false },
    { name: "الجودة", href: "/quality", current: false },
    { name: "شركاء النجاح", href: "/partners", current: false },
    { name: "العروض", href: "/product/discount", current: false },

  ];
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState(false);
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      setSearch(true);
    } else {
      setSearch(false);
    }
  }, [searchTerm]);

  return (
    <div className="z-50 ">
      
      <div className="max-sm:hidden lg:fixed bg-black  w-full h-[91px] 2xl:h-[126px]   z-40 bg-opacity-60 ">
          <nav
            className={` text-white max-sm:hidden flex justify-center items-center gap-6 h-full `}
          >
            

            <div className="flex  justify-center items-center">
              
            <div className="hidden lg:flex  gap-x-10 ml-16">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`font-medium  text-lg 2xl:text-2xl  cursor-pointer  hover:text-[#FF7315] activeClassName="active"  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>


            <div><img src={logo} alt="asd" className="relative  left-56 " /></div>
            </div>
          </nav>
        </div>
        {/* {  show && <div className="fixed left-24 top-24 z-50 bg-white rounded-2xl"><Chat/></div>}  */}
        <div className="max-sm:hidden flex flex-col text-white 2xl:w-10 w-10 relative  left-24   h-  z-50 ">
                <div className="fixed left-16 top-8 2xl:top-12 "><img src={downar} alt="downar" /></div>
              <div className="fixed  top-6 2xl:top-9"> <FaGlobe className="2xl:w-[33.33px] 2xl:h-[33.33px] w-[25px] h-[25px]  fixed " />
                <Link to="/cart" className='mt-1 w-6 2xl:w-14 2xl:h-12 h-6 ml-10 fixed hidden'><img src={cart} alt="cart"/></Link></div>
              <div className={`gap-y-8 flex flex-col ${socialDisplay} absolute top-36 2xl:top-48`}>
                <a href="https://www.facebook.com/profile.php?id=100086364507234" target="_blank">
                  <FaFacebook className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 " />
                </a>
                <a href="https://www.instagram.com/nama_taiba/" target="_blank">
                  <FaInstagram className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 " />
                </a>
                <a href="https://twitter.com/NamaTaiba" target="_blank">
                  <FaTwitter className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 " />
                </a>
                <a href="https://www.snapchat.com/add/nama_taiba?share_id=EdYdd_Y10Pc&locale=en-US" target="_blank">
                  <FaSnapchat  className="w-[25px] 2xl:w-[33.33px] h-[25px] 2xl:h-8 " />
                </a>
                
                {/* <div className="bg-[#5D5959] p-1 pt-3 px-2  rounded-2xl fixed w-12 h-12  right-[90px] top-[455px]">
                <button onClick={() => toggle()} >
                  <img src={chat} alt="chatImage" />
                </button>
                </div> */}
              </div>
            </div>

            <div className="md:hidden">
            <div className="bg-[#252525] h-20  z-50  w-full ">
            <div className="flex justify-between h-full  mx-4  items-center">
              <div><img src={logo} alt="logo" className="w-32 h-16" /></div>
              {!show && <div><GiHamburgerMenu onClick={() => toggle()} className="text-white w-[27px] h-10 z-50"/></div>}
              { show && <div><AiOutlineClose onClick={() => toggle()} className="text-white  w-[27px] h-10 z-50"/></div>}
            </div>
                </div>
            {show && 
              <>
              {/* //make navbar for mobile here  */}
              
              <div className="absolute top-16 right-0 w-32 transition-all ease-out duration-300 h-64 rounded-l-xl bg-black text-white z-50">
                <div className="flex  flex-col justify-center items-center  h-full">
                  <div className="flex flex-col gap-2 ">
                    {navigationMob.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={`font-medium  text-lg  border-b border-white text-center pb-2  cursor-pointer  hover:text-[#FF7315] activeClassName="active"  `}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              </>
            }
            </div>
    </div>
  );
};

export default Navbar;
// {/* <div className="mt-16 z-50">
//       <div className="flex flex-col text-white 2xl:w-10 w-10 relative 2xl:left-12 left-24   h-1 -top-10 z-50 ">
//                 <div className="fixed left-16 top-8 "><img src={downar} alt="downar" /></div>
//                 <FaGlobe className="w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px] fixed " />
//                 <Link to="/cart" className='mt-1 w-6 h-6 ml-10 fixed'><img src={cart} alt="cart"/></Link>
//               <div className={`gap-y-8 flex flex-col ${socialDisplay} relative top-24`}>
//                 <a href="https://www.facebook.com/profile.php?id=100086364507234" target="_blank">
//                   <FaFacebook className="w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px]" />
//                 </a>
//                 <a href="https://www.instagram.com/nama_taiba/" target="_blank">
//                   <FaInstagram className="w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px]" />
//                 </a>
//                 <a href="https://twitter.com/NamaTaiba" target="_blank">
//                   <FaTwitter className="w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px]" />
//                 </a>
//                 <a href="https://www.snapchat.com/add/nama_taiba?share_id=EdYdd_Y10Pc&locale=en-US" target="_blank">
//                   <FaSnapchat  className="w-[25px] h-[25px] 2xl:w-[33px] 2xl:h-[33px]" />
//                 </a>
//                 <div className="bg-gray- p-2 rounded-xl fixed w-56 h-52  left-[90px] top-96">
//                 <a href="https://wa.me/09660555301707" target="_blank" >
//                   <img src={whatsapp} alt="whatsapp" className="w-12" />
//                 </a>
//                 </div>
//                 {/* <div className="bg-[#5D5959] p-1 pt-3 px-2  rounded-2xl fixed w-12 h-12  right-[90px] top-[455px]">
//                 <button onClick={() => toggle()} >
//                   <img src={chat} alt="chatImage" />
//                 </button>
//                 </div> */}
//               </div>
//             </div>
//       <div className="fixed bg-black  w-full -mt-[68px]  z-40 bg-opacity-60 ">
//           <nav
//             className={` text-white  flex justify-center items-center gap-6  `}
//           >
            

//             <div className="flex  justify-center items-center">
              
//             <div className="hidden lg:flex  gap-x-10 ml-16">
//               {navigation.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.href}
//                   className={`font-medium  text-sm 2xl:text-md cursor-pointer  hover:text-[#FF7315] activeClassName="active"  `}
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </div>

//             <div><img src={logo} alt="asd" className="relative 2xl:left-44 left-56 w-44 " /></div>
//             </div>
//           </nav>
//         </div>
//         {  show && <div className="fixed left-24 top-24 z-50 bg-white rounded-2xl"><Chat/></div>} 
//     </div> */}









{/* <div className="flex flex-row  -mt-2 outline-none outline-0">
  <form className="mr-4">
    <div className="">
      <div className="flex relative  inset-y-0 top-4 items-end pr-4 justify-end z-10 w-10 left-[275px]">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-[#FF7315] "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        {search && (
          <div
            className="z-50 cursor-pointer relaive top-"
            onClick={() => {
              setSearchTerm("");
            }}
          >
            <h1 className="text-black relative right-[280px] font-semibold">
              x
            </h1>
          </div>
        )}
      </div>
      <input
        type="search"
        id="default-search"
        className={`block p-4 pr-10 focus:outline-dashed  w-[310px] h-[50px] text-right -mt-5 indent-48 text-sm text-gray-900 bg-white b rounded-lg border-[#ff73155e] 
        focus:border-[#FF7315] focus:ring-2 focus:ring-[#FF7315] focus:ring-opacity-50
        z-50`}
        value={searchTerm}
        placeholder="...بحث"
        required=""
        onChange={(e) => {
          setSearchTerm(e.target.value), setSearch(true);
        }}
      />

                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium focus:outline-0 text-gray-900 sr-only dark:text-gray-300"
                  >
                    {" "}
                    asd
                  </label>

      {search &&
        productDetails
          .filter((val) => {
            if (searchTerm === "") {
              return val.name;
            } else if (
              val.name
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((val, key) => {
            return (
              <div
                className="flex flex-col items-center justify-end w-full h-full  bg-white text-black -mt-[5px] -z-10 ring-[#FF7315] ring-2 ring-opacity-20 border-[#FF7315] border-x-0 "
                key={key}
              >
                <NavLink
                  to={val.href}
                  className="flex flex-col items-center justify-center w-full h-full "
                >
                  <div className="flex flex-col items-end justify-end w-full h-full  p-2 bg-white rounded-b-3xl">
                    <h1 className="text-lg font-semibold text-center text-gray-900">
                      {val.name}
                    </h1>
                  </div>
                </NavLink>
              </div>
            );
          })}
    </div>
  </form>
</div> */}

 