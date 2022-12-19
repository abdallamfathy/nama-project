import React, { useEffect } from "react";
import { FaLessThan } from "react-icons/fa";
import { Footer, Navbar } from "../components";
import cert1 from "../assets/cert1.png";
import cert2 from "../assets/cert2.png";
import cert3 from "../assets/cert3.png";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";

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
      <div className="mx-20">
        <div className="flex justify-end py-20 items-baseline gap-4">
          <h1 className="text-3xl font-bold text-[#FF7315]">شركاء النجاح</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl text-[#3A3535]">الرئيسية</h1>
        </div>
        <div className="flex flex-row flex-wrap justify-center ">
          <img src={cert1} alt="image" className="w-80" />
          <img src={cert2} alt="image"  className="w-80"/>
          <img src={cert3} alt="image"  className="w-80"/>
          <img src={cert4} alt="image"  className="w-80"/>
          <img src={cert5} alt="image"  className="w-80"/>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PartnersPage;
