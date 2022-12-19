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
    <div className="2xl:my-28 my-20 container mx-auto">
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="2xl:text-4xl text-3xl font-bold  relative 2xl:mb-10">شهادات واعتمادات</h1>
      </div>
        <p className="text-right mb-10 mr-60 2xl:text-xl text-lg ">مصنع نما طيبة حاصل على جميع الشهادات والاعتمادات من الجهات السعودية المختصة.</p>
      <div className="flex justify-center flex-wrap 2xl:gap-44 gap-6 mx-10 ">
        <img src={inlogo} alt="image" />
        <img src={hrlogo} alt="image" />
        <img src={exlogo} alt="image" />
        <img src={justicelogo} alt="image"/>
        <img src={citylogo} alt="image" />
        <img src={houselogo} alt="image" />
        <img src={tradelogo} alt="image" />
        <img src={energylogo} alt="image" />

      </div>
    </div>
  );
};

export default Certificates;
