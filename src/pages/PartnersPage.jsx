import React, { useEffect } from "react";
import { FaLessThan } from "react-icons/fa";
import { Footer, Navbar } from "../components";
import mohaidlogo from "../assets/mohaid-logo.png";
import mezlogo from  "../assets/mez-logo.png";
import typologo from "../assets/typo-logo.png"
import arablogo from "../assets/arab-logo.png"
import bonlogo from "../assets/bon-logo.png"

const PartnersPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar
        textColor="text-[#3A3535] border-b border-[#ff731573]"
        socialDisplay="hidden"
      />
      <div className="2xl:mx-20 mx-12 max-sm:m-5">
        <div className="flex justify-end mt-36 pb-10 items-baseline gap-4 max-sm:my-5">
          <h1 className="text-3xl font-bold text-[#FF7315] max-sm:text-2xl">شركاء النجاح</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535] max-sm:text-xl">الرئيسية</h1>
        </div>
        <div className="flex justify-center flex-wrap 2xl:gap-44 2xl:gap-x-60 gap-x-40 gap-24 max-sm:gap-12 ">
        <img src={mohaidlogo} alt="image" className="w-44 h-40 max-sm:w-40 max-sm:h-32" />
        <img src={mezlogo} alt="image"  className="w-48 h-40 max-sm:w-40 max-sm:h-32" />
        <img src={typologo} alt="image"  className="w-44 h-40 max-sm:w-40 max-sm:h-32"/>
        <img src={bonlogo} alt="image"  className="w-48 h-40 max-sm:w-40 max-sm:h-32"/>
        <img src={arablogo} alt="image"  className="w-44 h-40 max-sm:w-40 max-sm:h-32"/>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default PartnersPage;
