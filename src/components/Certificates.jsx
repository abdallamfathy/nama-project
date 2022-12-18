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
    <div className="my-28">
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-4xl font-bold  relative mb-10">شهادات واعتمادات</h1>
      </div>
        <p className="text-right mb-10 mr-60 text-xl ">مصنع نما طيبة حاصل على جميع الشهادات والاعتمادات من الجهات السعودية المختصة.</p>
      <div className="flex justify-center flex-wrap gap-44 ">
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
