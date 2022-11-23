import React from "react";
import brick1 from "../assets/brick1.png";
import Products from "./Products";

const Modal = () => {


  // toggle model automatically
 

  


 
  return (
    
    
        
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden cursor-pointer  fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden "
            >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/} 
              <div className=" border-0 rounded-[60px] shadow-black shadow-2xl relative  flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex flex-col  justify-center  items-center w-[590px] h-[550px] ">
                <img className="w-[530px] h-[351px] relative top-  " src={brick1} alt="Ado" />
                <div className="text-right mx-24 gap-y-4 -mt-20 flex flex-col">
                <h1 className="text-2xl text-[#FF7315] font-bold">بلك بركانى خفيف 3 فتحات</h1>
                <p className="text-xl font-semibold">مواد خام خفيفة الكثافة</p>
                <p>البلك المعزول هو مثالى للبناء من جميع النواحى فهو فعال من حيث التكلفة وسهولة الاستخدام ويوفر خلفية مثالية لقبول أعمال اللياثة</p>
                <p className="font-bold">متوفر بأشكال مختلفة</p>
                </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black overflow-hidden"></div>
        </>
      ) 
  
}

export default Modal;