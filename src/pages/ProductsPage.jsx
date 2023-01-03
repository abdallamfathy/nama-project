import React, { useEffect, useState } from "react";
import { productsPage as products } from "../components/Constants";
import pdf from "../assets/file/nama.pdf";
import code from "../assets/code.png"
import gurante from "../assets/gurante.png"
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../index.css";
import { Footer, Navbar, Products } from "../components";
import { FaLessThan } from "react-icons/fa";


const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const name = products.map((product) => product.name);
  const size = products.map((product) => product.size);
  const color = products.map((product) => product.color);
  // console.log(name, size, color);

  const [showModal, setShowModal] = React.useState(false);

  // make esc key close model
  const keyPress = React.useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
        console.log("I pressed");
      }
    },
    [setShowModal, showModal]
  );
  // make modal refrence to close model
  React.useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  const modalRefs = React.useRef();

  // make closeModal function to close model
  const closeModal = (e) => {
    if (e.target === modalRefs.current) {
      setShowModal(false);
    }
  };
  // make modal close when click outside model
  React.useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => document.removeEventListener("mousedown", closeModal);
  }, [setShowModal]);

  //id of product
  const [id, setId] = useState(0);

  return (
    <>
      <Navbar
        textColor="text-[#3A3535] border-b border-[#ff731573]"
        socialDisplay="hidden"
      />
      <div className="2xl:mx-20 mx-12">
        <div className="flex justify-end mt-36  items-baseline gap-4 ">
          <h1 className="text-3xl 2xl:text-4xl font-bold text-[#FF7315]">منتجاتنا</h1>
          <span>
            <FaLessThan />
          </span>
          <h1 className="text-2xl 2xl:text-3xl text-[#3A3535]">الرئيسية</h1>
        </div>
      {showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden cursor-pointer  fixed inset-0 z-40 outline-none focus:outline-none overflow-hidden "
            ref={modalRefs}
          >
            
          {products.filter((product) => (
          product.id === id
           )).map((product) => (
            <div
              onClick={() => {
                closeModal, setShowModal(true);
              }}
              className=" flex flex-col cursor-pointer justify-between items-center 2xl:w-[305px] 2xl:h-[342px] w-[270px] h-80 relative group  rounded-3xl bg-white shadow-lg  "
            >
        <div className="h-44 w-full ">
          
        <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
          background: "red",
        }}
        effect={"fade"}
        navigation
        // speed={2500}
        // autoplay={{ delay: 1500, disableOnInteraction: false }}
        
      >
        <SwiperSlide className="rounded-t-3xl">
        <div className=" h-32 w-full flex justify-center items-center"> 
        <img
                className="transition duration-[2000]  delay-300 hover:transition-all ease-out    hover:w-44  w-36 h-28 hover:h-32 object-contain  "
                src={product.image}
                alt="productImage"
              />

        </div>
        </SwiperSlide>
        <SwiperSlide className="rounded-t-3xl">
        <div className=" h-32 pt-1 w-full flex justify-center items-center  "> 
        <img
                className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out   hover:w-44  w-36 h-28 hover:h-32 rotate-90 object-contain"
                src={product.image}
                alt="productImage"
              />        
        </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
        
              
              <div className="text-right  2xl:text-[24px] text-sm h-28 w-full rounded-b-lg text-[#3A3535] flex flex-col  gap-2 py-2 -translate-y-5 ">
                
                
                <div className="mx-4 flex flex-col justify-center items-end gap-1   text-sm">
                <p className="text-[#FF7315] text-lg">{product.name}</p>
                <p>{product.type}</p>
                <p>{product.size}</p>
                  <h2 className="font-semibold">{product.use}</h2>
                  
                </div>
              </div>
            </div>
            
           )
)}
        
          </div>
          <div className="opacity-60 fixed inset-0 z-30 bg-black overflow-hidden"></div>
        </>
      )}



      <div className="2xl:m-20 m-12 ">
        


      <div className="flex flex-wrap flex-row justify-center 2xl:gap-36 gap-20 2xl:gap-x-36  gap-x-[145px]">
          {products.map((product) => (
            <div
              
              className=" flex flex-col cursor-pointer justify-between items-center 2xl:w-[305px] 2xl:h-[342px] w-[270px] h-96 relative group  rounded-lg border z-10 border-gray-50 shadow-lg  "
            >
        <div className=" w-full">
          <div className="flex justify-between gap-[140px] 2xl:gap-[175px] absolute z-10">
            <img src={gurante} alt="gurante" className="object-contain w-16"/>
            {!product.gur &&  <img src={code} alt="code" className="object-contain w-16 rounded-tr-lg"/> }
          
          </div>
        <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
          background: "red",
        }}
        effect={"fade"}
        navigation
        // speed={2500}
        // autoplay={{ delay: 1500, disableOnInteraction: false }}
        
      >
        <SwiperSlide>
        <div className=" h-64 w-full flex justify-center items-center  "> 
        <img
                className="transition duration-[2000]  delay-300 hover:transition-all ease-out     hover:w-48  w-36 h-36 hover:h-44 object-contain"
                src={product.image}
                alt="productImage"
                onClick={() => {
                  closeModal, setShowModal(true) , setId(product.id), console.log(id);;
                }}
              />

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" h-64 pt-1 w-full flex justify-center items-center  "> 
        <img
                className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out     hover:w-48  w-36 h-36 hover:h-44  rotate-90 object-contain"
                src={product.image}
                alt="productImage"
                onClick={() => {
                  closeModal, setShowModal(true) , setId(product.id), console.log(id);;
                }}
              />        
        </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
        
              <div className="bg-[#3A3535] text-xs px-2 py-1 2xl:-translate-x-[7.26rem] -translate-x-[6.2rem]  text-left text-white ">
                <h2>{product.code}</h2>
              </div>
              <div className="text-right text-white 2xl:text-lg text-sm h-32 2xl:h-40 w-full rounded-b-lg pb-5 bg-[#3A3535] flex flex-col  gap-2 py-2  ">
                <div className="flex justify-between mx-2">
                <div className="flex font-bold  gap-2 ">
                  <p>ر.س للحبة</p>
                  <p>{product.price} </p>
                  </div>
                <p>{product.name}</p>
                </div>
                <div className="flex justify-between mx-2">
                <p>{product.size}</p>
                <p>{product.type}</p>
                </div>
                <div className="mx-2 flex flex-col justify-center items-center gap-2  mt-2 text-[10px] ">
                  <h2 className="bg-[#FF7315] px-1">{product.use}</h2>
                  {/* <a href="/cart"><button className="bg-white rounded-md text-[#3A3535] px-1">أضف الى عربة التسوق</button></a> */}
                </div>
              </div>
            </div>
          ))}
        </div>





        {/* <div className="flex flex-wrap flex-row justify-center gap-20 2xl:gap-x-24 gap-x-[58px]">
          {products.map((product) => (
            <div
              onClick={() => {
                closeModal, setShowModal(true) , setId(product.id), console.log(id);;
              }}
              className=" flex flex-col cursor-pointer justify-between items-center 2xl:w-[305px] 2xl:h-[342px] w-[270px] h-96 relative group  rounded-lg border border-gray-50 shadow-lg  "
            >
        <div className=" w-full">
          <div className="flex justify-between gap-[140px] absolute z-10">
            <img src={gurante} alt="gurante" className="object-contain w-16"/>
            <img src={code} alt="code" className="object-contain w-16 rounded-tr-lg"/>
          </div>
        <Swiper
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          EffectFade,
          Autoplay,
        ]}
        pagination={{
          dynamicBullets: false,
          clickable: true,
          background: "red",
        }}
        effect={"fade"}
        navigation
        // speed={2500}
        // autoplay={{ delay: 1500, disableOnInteraction: false }}
        
      >
        <SwiperSlide>
        <div className=" h-64 w-full flex justify-center items-center  "> 
        <img
                className="transition duration-[2000]  delay-300 hover:transition-all ease-out 2xl:hover:left-20  absolute    hover:w-44  w-36 h-36 hover:h-44 object-contain"
                src={product.image}
                alt="productImage"
              />

        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" h-64 pt-1 w-full flex justify-center items-center  "> 
        <img
                className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out 2xl:hover:left-20  absolute 2xl:left-24  2xl:top-12   hover:w-44  w-36 h-36 hover:h-44  rotate-90 object-contain"
                src={product.image}
                alt="productImage"
              />        
        </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
        
              <div className="bg-[#3A3535] text-xs px-2 py-1 -translate-x-[6.16rem]  text-left text-white ">
                <h2>{product.code}</h2>
              </div>
              <div className="text-right text-white 2xl:text-[24px] text-sm h-32 w-full rounded-b-lg bg-[#3A3535] flex flex-col  gap-2 py-2  ">
                <div className="flex justify-between mx-2">
                <div className="flex font-bold  gap-2 ">
                  <p>ر.س للحبة</p>
                  <p>{product.price} </p>
                  </div>
                <p>{product.name}</p>
                </div>
                <div className="flex justify-between mx-2">
                <p>{product.size}</p>
                <p>{product.type}</p>
                </div>
                <div className="mx-2 flex flex-col justify-center items-center gap-2  mt-2 text-[10px] ">
                  <h2 className="bg-[#FF7315] px-1">{product.use}</h2>
                  <a href="/cart"><button className="bg-white rounded-md text-[#3A3535] px-1">أضف الى عربة التسوق</button></a>
                </div>
              </div>
            </div>
          ))}
        </div> */}
{/* <Products/> */}

        {/* <div className="flex-col items-center justify-center text-center  mt-20">
        <a href={pdf} download="nama.pdf" className="text-[#FF7315] text-center  2xl:text-3xl text-2xl  ">
      تحميل ملف نما طيبة
      </a>
      <hr className=" border-t z-40  border-[#FF7135] relative left-[470px] w-40 mt-1" />

        </div> */}
      </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
