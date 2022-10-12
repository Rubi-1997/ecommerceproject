import React from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { orange } from "@mui/material/colors";

function Footer() {
    const style="m-3 rounded-full cursor-pointer p-2 text-white"
  return (
    <div className="flex items-center justify-around p-2">
      <div className="flex flex-1 flex-col flex-wrap p-2">
        {/* Store Information */}
        <h1 className="text-[25px]">Alphanzo</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa porro
          ratione id beatae placeat odit possimus? Dolore tenetur obcaecati
          distinctio repudiandae? Nam laudantium omnis assumenda ex harum vel.
          Optio, explicabo!
        </p>
        <div className="flex flex-1 justify-around items-center  mt-3 self-start">
            <div className={style + ` bg-blue-700`}>
                <FacebookOutlinedIcon/>
            </div>
            <div className={style + ` bg-orange-500`}>
            <InstagramIcon/>
            </div>
            <div className={style + ` bg-sky-400`}>
            <TwitterIcon/>
            </div>
            <div className={style + ` bg-red-600`} >
            <PinterestIcon/>
            </div>
        </div>
      </div>

      <div className="flex flex-1 p-2 flex-col">
       <div className=" flex m-3">
        <LocationOnOutlinedIcon/>
        <p className="pl-3">State California</p>
       </div>

       <div className=" flex m-3">
        <LocalPhoneOutlinedIcon/>
        <p className="pl-3">+91 34572986</p>
       </div>

       <div className=" flex m-3">
        <MailOutlinedIcon/>
        <p className="pl-3">alphanzotechnology@gmail.com</p>
       </div>
      </div>
    </div>
  );
}

export default Footer;
