import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Navbaar = () => {
    
    const style='text-[14px] cursor-pointer ml-[25px]'
    return (
        <div className='navbar h-[60px] shadow-md relative z-10'>
            <div className='wrapper pl-[20px] pr-[20px] pt-[10px] pb-[10px] flex justify-between items-center'>
                <div className='left flex flex-1 items-center'>
                  <div className='language cursor-pointer text-[16px]'>En</div>
                  <div className='searchInput flex border-[2px] border-solid border-lightgrey rounded-md items-center ml-[10px] p-[5px] focus-within:border-[#8a4af3] transition-all'>
                    <input className='input outline-none' type="text"/>
                    <SearchIcon className='' style={{fontSize:'16px'}}/>
                  </div>
                </div>
                <div className='center flex-1 test-center'>
                    <div className='logo font-bold text-lg'>
                        Summer Kings
                    </div>
                </div>
                <div className='right flex items-center justify-end'>
                    <div className={style}>Register</div>
                    <div className={style}>Sign In</div>
                        <ShoppingCartOutlinedIcon className={style}/>
                    <div className={style}>
                    <Badge badgeContent={2} color='primary'>
                    </Badge>
                    </div>
                </div>
            </div>  
        </div>
  )
}

export default Navbaar