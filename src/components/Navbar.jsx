import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGlobe,
  FaSnapchat,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import { productDetails, products } from "./Constants";
import chat from "../assets/chat.png";
import Chat from "./Chat";

const Navbar = ({ textColor, socialDisplay }) => {
  const params = useParams();

  const navigation = [
    { name: "شركاء النجاح", href: "/partners", current: false },
    { name: "الجودة", href: "/quality", current: false },
    { name: "من نحن", href: "/about", current: false },
    { name: "منتجاتنا", href: "/products", current: false },
    { name: "الرئيسية", href: "/", current: true },
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
    <div className="mt-16">
      <div className="fixed bg-[#5C5757]  w-full -mt-16 bg-opacity-70  z-50 ">
          <nav
            className={` text-white px-6 flex justify-center items-center gap-6 `}
          >
            

            <div className="flex  justify-center items-center">
      <div className="flex flex-col  w-10 relative right-60 h-2 -top-3 z-10 ">
              <div className={`gap-y-8 flex flex-col ${socialDisplay}`}>
              <FaGlobe className="mb-24 w-[33px] h-[33px]" />
                <a href="https://www.facebook.com/profile.php?id=100086364507234">
                  <FaFacebook className="w-[33px] h-[33px]" />
                </a>
                <a href="https://www.instagram.com/nama_taiba/">
                  <FaInstagram className="w-[33px] h-[33px]" />
                </a>
                <a href="https://twitter.com/NamaTaiba">
                  <FaTwitter className="w-[33px] h-[33px]" />
                </a>
                <a href="https://www.snapchat.com/add/nama_taiba?share_id=EdYdd_Y10Pc&locale=en-US">
                  <FaSnapchat  className="w-[33px] h-[33px]" />
                </a>
                <div className="bg-gray-700 p-2 rounded-xl relative  top-24">
                <a href="#" onClick={() => toggle()} >
                  <img src={chat} alt="chatImage" />
                </a>
                </div>
              </div>
            </div>
              
            <div className="hidden lg:flex  gap-x-9 ">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={`font-medium text-xl cursor-pointer  hover:text-[#FF7315] activeClassName="active"  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div><img src={logo} alt="asd" className="relative left-36" /></div>
            </div>
          </nav>
        </div>
        {  show && <div className="fixed left-36 top-24 z-50 bg-white rounded-2xl"><Chat/></div>} 
    </div>
  );
};

export default Navbar;

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

 