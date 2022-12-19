import React, { useEffect, useState } from "react";
import brick1 from "../assets/brick1.png";
import Buttons from "./Button";
import { products } from "./Constants";

const Products = () => {
  const name = products.map((product) => product.name);
  const size = products.map((product) => product.size);
  const color = products.map((product) => product.color);
  console.log(name, size, color);

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

  return (
    <div id="products">
      
      {showModal && (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden cursor-pointer  fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden "
            ref={modalRefs}
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" border-0 rounded-[60px] shadow-black shadow-2xl relative  flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col  justify-center  items-center w-[590px] h-[550px] ">
                  <img
                    className="w-[530px] h-[351px] relative top-  "
                    src={brick1}
                    alt="Ado"
                  />
                  <div className="text-right mx-24 gap-y-4 -mt-20 flex flex-col">
                    <h1 className="text-2xl text-[#FF7315] font-bold">
                      بلك بركانى خفيف 3 فتحات
                    </h1>
                    <p className="text-xl font-semibold">
                      مواد خام خفيفة الكثافة
                    </p>
                    <p>
                      البلك المعزول هو مثالى للبناء من جميع النواحى فهو فعال من
                      حيث التكلفة وسهولة الاستخدام ويوفر خلفية مثالية لقبول
                      أعمال اللياثة
                    </p>
                    <p className="font-bold">متوفر بأشكال مختلفة</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black overflow-hidden"></div>
        </>
      )}

      <div className="mx-20 my-20 ">
        <h1 className="text-4xl text-[#3A3535] font-bold text-center mb-10">
          منتجاتنا
        </h1>
        <div className="flex flex-wrap flex-row justify-center gap-20 2xl:gap-x-24 gap-x-[58px]">
          {products.map((product) => (
            <div
              onClick={() => {
                closeModal, setShowModal(true);
              }}
              className=" flex flex-row cursor-pointer justify-center items-center 2xl:w-[305px] 2xl:h-[342px] w-[270px] h-[310px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out 2xl:hover:left-20 hover:left-16 absolute 2xl:left-24 left-20 2xl:top-12 top-10  hover:w-44  w-36 h-36 hover:h-44"
                src={product.image}
                alt="productImage"
              />
              <div className="text-right text-[#3A3535] 2xl:text-[24px] text-xl h-[108px] w-[250px] relative 2xl:right-0 right-4 top-14 ">
                <p>{product.name}</p>
                <p>{product.size}</p>
                <p>{product.color}</p>
              </div>
            </div>
          ))}
        </div>

        <Buttons text={"عرض المزيد"} href={"/products"} />
      </div>
    </div>
  );
};

export default Products;
