import envlogo from "../assets/env-logo.png";
import hrlogo from  "../assets/hr-logo.png";
import zakalogo from "../assets/zaka-logo.png"
import citylogo from "../assets/cities-logo.png"
import houselogo from "../assets/house-logo.png"
import energylogo from "../assets/energy-logo.png"




const Certificates = () => {
  return (
    <div className=" m-20 2xl:m-28 max-sm:m-5">
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="2xl:text-5xl text-4xl font-bold  relative 2xl:mb-10 max-sm:text-2xl">شهادات واعتمادات</h1>
      </div>
        <p className=" text-center mb-10 2xl:text-3xl text-2xl max-sm:text-lg max-sm:leading-9">مصنع نما طيبة حاصل على جميع الشهادات والاعتمادات من الجهات السعودية المختصة</p>
      <div className="flex justify-center flex-wrap 2xl:gap-48 2xl:gap-x-72 gap-x-52 gap-20 max-sm:gap-10 max-sm:gap-x-16  ">
        <img src={houselogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24"/>
        <img src={zakalogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24" />
        <img src={hrlogo} alt="image" className="w-52 h-44  max-sm:w-36 max-sm:h-24" />
        <img src={citylogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24"/>
        <img src={energylogo} alt="image"  className="w-52 h-44 max-sm:w-36 max-sm:h-24"/>
        <img src={envlogo} alt="image" className="w-52 h-44 max-sm:w-36 max-sm:h-24" />

      </div>
    </div>
  );
};

export default Certificates;
