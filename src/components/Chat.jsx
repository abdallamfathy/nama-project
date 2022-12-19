import React from 'react'
import chat1 from '../assets/chat1.png'
import person from '../assets/person.png'
import send from '../assets/send.png'
const Chat = () => {
  return (
    <div className=' left-52 top-24   z-50'>
        <div className='2xl:w-[313px] 2xl:h-[438px] w-[280px] h-[370px] bg-white flex  flex-col justify-center items-center shadow-2xl 2xl:gap-y-8 gap-y-4 rounded-2xl'>
            <div className='flex flex-col justify-center items-center text-black p-4 px-10 '>
                <img src={chat1} alt="chat image" className='text-black mb-4'/>
                <p className='text-right'>مرحبا بك فى مساعدك الشخصى من نما طيبة للبلك البركانى ! متحاين معك من 9 صباحا الى 5 مساء.</p>
            </div>
            <div className='bg-gray-200 2xl:w-[200px] 2xl:h-[145px] w-[170px] h-[110px] p-4 text-right rounded-xl'>
              <p className='2xl:text-sm text-xs font-bold'>مساعدك الشخصى من نما طيبة</p>
              <p className='2xl:text-xs text-[10px]'>مرحبا بك فى مساعدك الشخصى من نما طيبة للبلك البركانى ! متحاين معك من 9 صباحا الى 5 مساء.</p>
              <div className='bg-gray-200 rounded-full relative 2xl:left-48 left-40 bottom-28 w-10 h-10 flex justify-center items-center'>
                <img src={person} alt="personimage" />
              </div>
            </div>
            <div className='flex '>
              <button className='bg-gray-200 2xl:w-[50px] 2xl:h-[50px] w-[30px] h-[30px]   rounded-full  mr-3 flex justify-center items-center'><img src={send} alt="" className='w-4 h-4'/></button>
               <button className='bg-gray-200 rounded-3xl h-9 2xl:h-12 w-44   relative bottom-1'><input type="text" className='bg-transparent  border-transparent focus:outline-none focus:border-0 ' /></button>
            </div>

        </div>
    </div>
  )
}

export default Chat