import React from "react";
import cert4 from "../assets/cert4.png";
import cert5 from "../assets/cert5.png";
import cert6 from "../assets/cert6.png";

const Certificates = () => {
  return (
    <div className="my-28">
      <div className="flex justify-center my-8">
        <h1 className="text-4xl font-bold  relative ">شهادات واعتمادات</h1>
      </div>
      <div className="flex justify-center ">
        <img src={cert4} alt="image" />
        <img src={cert5} alt="image" />
        <img src={cert6} alt="image" />
      </div>
    </div>
  );
};

export default Certificates;
