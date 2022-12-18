import React from 'react'
import chat1 from '../assets/chat1.png'
import person from '../assets/person.png'
import send from '../assets/send.png'
const Chat = () => {
  return (
    <div className=' left-52 top-24   z-50'>
        <div className='w-[313px] h-[438px] bg-white flex  flex-col justify-center items-center shadow-2xl gap-y-8 rounded-2xl'>
            <div className='flex flex-col justify-center items-center text-black p-4 px-10 '>
                <img src={chat1} alt="chat image" className='text-black mb-4'/>
                <p className='text-right'>مرحبا بك فى مساعدك الشخصى من نما طيبة للبلك البركانى ! متحاين معك من 9 صباحا الى 5 مساء.</p>
            </div>
            <div className='bg-gray-200 w-[200px] h-[145px] p-4 text-right rounded-2xl'>
              <p className='text-sm font-bold'>مساعدك الشخصى من نما طيبة</p>
              <p className='text-xs'>مرحبا بك فى مساعدك الشخصى من نما طيبة للبلك البركانى ! متحاين معك من 9 صباحا الى 5 مساء.</p>
              <div className='bg-gray-200 rounded-full relative left-48 bottom-28 w-10 h-10 flex justify-center items-center'>
                <img src={person} alt="personimage" />
              </div>
            </div>
            <div className='flex '>
              <button className='bg-gray-200  w-[50px] h-[50px] rounded-full  mr-3 flex justify-center items-center'><img src={send} alt="" /></button>
               <button className='bg-gray-200 rounded-3xl h-12 relative '><input type="text" className='bg-transparent  border-transparent focus:outline-none focus:border-0' /></button>
            </div>

        </div>
    </div>
  )
}

export default Chat