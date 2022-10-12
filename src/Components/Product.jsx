// import { ListItem } from "@mui/material";
import {React,useState} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Product({item}) {
  const [hoverEffect,setHoverEffect]=useState(' opacity-0')
  const iconStyle="flex rounded-full bg-white h-[40px] w-[40px] items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale(1.1) ease-in-duration-100 cursor-pointer"
  const onHoverhandleEnter=()=>{
    setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)]')
  }
  const onHoverhandleExit=()=>{
    setHoverEffect(' opacity-0')

  }
  
  return (
    <div className="flex  flex-1 items-center justify-center min-w-[300px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative " onMouseEnter={onHoverhandleEnter} onMouseLeave={onHoverhandleExit}>
      <img src={item.src} alt="product_image" />
      <div className={`flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100`+ hoverEffect}>
      <div className={iconStyle}>
        <ShoppingCartOutlinedIcon/>
      </div>

      <div className={iconStyle}>
      <FavoriteBorderOutlinedIcon/>
      </div>

      <div className={iconStyle}>
        <SearchOutlinedIcon/>
      </div>

      </div>
    </div>
  );
}
