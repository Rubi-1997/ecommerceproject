import React from 'react'

function Counter() {
  return (
    <div className='flex items-center justify-center text-2xl'>
        Quantity
    <div className='flex shadow-md ml-5'>
      <div className='flex bg-[#8a4af3] text-white w-8 items-center justify-center cursor-pointer rounded-l-md'>-</div>
      <div className='flex items-center justify-center border-2 border-[#8a4af3] w-8'>1</div>
      <div className='flex bg-[#8a4af3] text-white w-8 items-center justify-center cursor-pointer rounded-r-md'>+</div>
    </div>

    </div>
  )
}

export default Counter