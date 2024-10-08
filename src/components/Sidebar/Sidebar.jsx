import React from 'react'
import { VscThreeBars } from "react-icons/vsc";
import logo from "../../../public/images/logo.png"
import Links from './Links';

const Sidebar = () => {

  return (
    <div className='w-[244px] h-[100vh] flex items-start pt-[20px] ml-4 justify-end flex-col'>
      <img src={logo} className='w-[100px] mb-[40px] ml-[10px]' />
      <Links />
      <div className='text-white flex items-center justify-start mb-[9px] cursor-pointer w-[180px] p-[10px] rounded-sm'>
        <VscThreeBars className='text-[27px] text-white' />
        <p className='text-[15px] ml-[16px] '>More</p>
      </div>
    </div>
  )
}

export default Sidebar