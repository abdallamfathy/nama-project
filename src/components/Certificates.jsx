import React from "react";
import exlogo from "../assets/ex-logo.png";
import inlogo from  "../assets/in-logo.png";
import hrlogo from "../assets/hr-logo.png"
import justicelogo from "../assets/justice-logo.png"
import citylogo from "../assets/cities-logo.png"
import houselogo from "../assets/house-logo.png"
import tradelogo from "../assets/trade-logo.png"
import energylogo from "../assets/energy-logo.png"




const Certificates = () => {
  return (
    <div className="2xl:my-28 my-20 mx-20">
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="2xl:text-4xl text-3xl font-bold  relative 2xl:mb-10">شهادات واعتمادات</h1>
      </div>
        <p className="text-right mb-10 2xl:mr-60 2xl:text-xl text-lg ">مصنع نما طيبة حاصل على جميع الشهادات والاعتمادات من الجهات السعودية المختصة.</p>
      <div className="flex justify-center flex-wrap 2xl:gap-44 gap-60  ">
        <img src={inlogo} alt="image" className="w-52 h-44" />
        <img src={hrlogo} alt="image"  className="w-52 h-44" />
        <img src={exlogo} alt="image" className="w-52 h-44" />
        <img src={justicelogo} alt="image" className="w-52 h-44"/>
        <img src={houselogo} alt="image"  className="w-52 h-44"/>
        <img src={tradelogo} alt="image"  className="w-52 h-44"/>
        <img src={energylogo} alt="image"  className="w-52 h-44"/>
        <img src={citylogo} alt="image"  className="w-52 h-44"/>

      </div>
    </div>
  );
};

export default Certificates;
