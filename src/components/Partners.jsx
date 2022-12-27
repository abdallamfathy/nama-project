import React from "react";
import mohaidlogo from "../assets/mohaid-logo.png";
import mezlogo from  "../assets/mez-logo.png";
import typologo from "../assets/typo-logo.png"
import arablogo from "../assets/arab-logo.png"
import bonlogo from "../assets/bon-logo.png"

import Button from "./Button";

const Partners = () => {
  return (
    <div className="my-20 mx-20 ">
      <div className="flex justify-center my-8">
        <h1 className="2xl:text-4xl text-3xl font-bold  relative ">شركاء النجاح</h1>
      </div>
      <div className="flex justify-center flex-wrap 2xl:gap-44 gap-x-40 gap-24  ">
        <img src={mohaidlogo} alt="image" className="w-44 h-40" />
        <img src={mezlogo} alt="image"  className="w-48 h-40" />
        <img src={typologo} alt="image"  className="w-44 h-40"/>
        <img src={arablogo} alt="image"  className="w-44 h-40"/>
        <img src={bonlogo} alt="image"  className="w-48 h-40"/>

      </div>
      <Button text={"عرض المزيد"} href={"/partners"} />
    </div>
  );
};

export default Partners;
