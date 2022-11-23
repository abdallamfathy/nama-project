import React, { useEffect } from 'react'
import { FaLessThan } from 'react-icons/fa'
import { Footer, Navbar } from '../components'
import brick1 from '../assets/brick1.png'
import { products } from '../components/Constants'

const ProductsBlue = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  
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
    <>
    <Navbar textColor="text-[#3A3535] border-b border-[#ff731573]" socialDisplay="hidden"/>
    {showModal && (<>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-hidden cursor-pointer fixed inset-0 z-50 outline-none focus:outline-none overflow-hidden "
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

      <div className='container mx-auto pb-28'>
          <div className='flex justify-end my-20 items-baseline gap-4'>
          <h1 className='text-3xl font-bold text-[#FF7315]'>شريحة لون أزرق</h1>
          <span ><FaLessThan/></span>
          <h1 className='text-2xl text-black'>منتجاتنا</h1>
          <span ><FaLessThan/></span>
          <h1 className='text-2xl text-[#3A3535]'>الرئيسية</h1>
          </div>
          <div className='flex flex-wrap flex-row justify-center gap-20 gap-x-24'>
         
                    {products.filter((val) => {
                      if(val.type === "blue") {
                          return val
                          }
                            }).map((product , key) => {
                              return (<div  key={product.id} onClick={()=> {closeModal,setShowModal(true)}}  className=" flex flex-row cursor-pointer justify-center items-center w-[305px] h-[342px] relative group bg-white rounded-lg border border-gray-50 shadow-lg  dark:bg-gray-800 dark:border-gray-700">
                              <img  className="-my-10 transition duration-[2000]  delay-300 hover:transition-all ease-out hover:left-20 absolute left-24 top-12  hover:w-44  w-36 h-36 hover:h-44" src={product.image} alt="productImage" />
                              <div  className="text-right text-[#3A3535] text-[24px] h-[108px] w-[250px] relative top-14 ">
                                <p>{product.name}</p>
                                <p >
                                  {product.size}
                                </p>
                                <p>{product.color}</p>
                              </div>
                            </div> ) })}
        
        </div>
          
      </div>
      <Footer />

  </>
  )
}

export default ProductsBlue