import React, { useEffect, useState } from 'react'
import brick1 from '../assets/brick1.png'
import brick2 from '../assets/brick2.png'
import brick3 from '../assets/brick3.png'
import brick4 from '../assets/brick4.png'
import brick5 from '../assets/brick5.png'
import brick6 from '../assets/brick6.png'
import brick7 from '../assets/brick7.png'
import brick8 from '../assets/brick8.png'
import brick9 from '../assets/brick9.png'
import brick10 from '../assets/brick10.png'
import brick11 from '../assets/brick11.png'
import brick12 from '../assets/brick12.png'
import Buttons from './Button'
import Modal from './Modal'
import { products } from './Constants'

const Products = () => {

  const name = products.map((product) => product.name)
  const size = products.map((product) => product.size)
  const color = products.map((product) => product.color)
  console.log(name , size , color);  
  
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
    if ( e.target === modalRefs.current)   {
          setShowModal(false);
        } 
   };
   // make modal close when click outside model
  React.useEffect(() => {
    document.addEventListener("mousedown", closeModal);
    return () => document.removeEventListener("mousedown", closeModal) ;
  }, [setShowModal]);

  
  return (
    <div id='products my-28'>
      
      {showModal && (<>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden cursor-pointer  fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden "
            ref={modalRefs}>
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
        </>)}


      <div className='container mx-auto '>
        <h1 className='text-4xl text-[#3A3535] font-bold text-center mb-6'>منتجاتنا</h1>
        <div className='flex flex-wrap flex-row justify-center gap-20 gap-x-24'>
        {products.map((product) => (
            <div   onClick={()=> {closeModal,setShowModal(true)}}  className=" flex flex-row cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
            <img  className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44" src={product.image} alt="productImage" />
            <div  className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>{product.name}</p>
              <p >
                {product.size}
              </p>
              <p>{product.color}</p>
            </div>
          </div>
        ))}
        </div>
        {/* <div className='flex flex-wrap flex-row justify-center gap-20 gap-x-24'>
          <div   onClick={()=> {closeModal,setShowModal(true)}}  className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
            
              <img  className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44" src={brick1} alt="Ado" />
            
           
            <div  className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}}  className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick2} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick4} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick5} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick6} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick7} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick8} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick9} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick10} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick11} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick11} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>

          <div onClick={()=> {closeModal,setShowModal(true)}} className=" flex flex-col cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
              <img className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44   " src={brick12} alt="asd" />
            <div className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
              <p>النوع :3 فتحات</p>
              <p >
                المقاس : 20 × 20 × 40
              </p>
              <p>لون الشريحة : بدون</p>
            </div>
          </div>




        </div> */}
      
        <Buttons text={"عرض المزيد"} href={"/products"} />
        
      </div>
    </div>
  )
}

export default Products

