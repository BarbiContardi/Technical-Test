"use client"
import Switcher from "../../toggle/switcher";

const Footer = () => {
  return (
    <div className='flex items-center justify-between mt-[30px] text-[var(--textSoft)]'>
    <div className='font-bold'>Barbi Dev</div>
    <div className='text-xs'>© All rights reserved.</div>
    <Switcher/>
  </div>
  );
};

export default Footer;
