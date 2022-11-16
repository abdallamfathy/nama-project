import React from 'react'

const Button = ({text}) => {
  return (
    <>
        <div className='flex justify-center'>
     <button className='text-lg text-[#FF7315] bg-[#232020] rounded-xl w-[122px] h-[51px] text-center mt-20 transition ease-in-out hover:text-xl hover:bg-[#FF7315] hover:text-[#232020] '>{text}</button>
     </div>
    </>
  )
}

export default Button