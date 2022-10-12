import React from 'react'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

function Newsletter() {
  return (
    <div className='flex items-center  flex-col justify-center w-[100%] h-[350px] bg-[#c4a4f9] '>
        <h1 className='text-[50px] font-bold'>NEWSLETTER</h1>
        <h2 className='text-[20px] mt-2'>Always in touch with us, for your favourite Products</h2>
        <div className='flex items-center justify-between min-w-[30rem] min-h-[2rem] bg-white border-[#cccccc] rounded-[5px] overflow-hidden '>
            <input type="email" placeholder="Email"  className='pl-[20px] border-none outline-none flex-[7]'/>
            <button className='bg-[#4caf59] flex-1 h-[100%]'>
                <SendOutlinedIcon/> 
            </button>
        </div>
    </div>

  )
}

export default Newsletter