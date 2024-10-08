import React from 'react'
import profile from "../../../public/images/user-icon/profile.png"
import cristiano from "../../../public/images/user-icon/cristiano.jpg"
import iqra from "../../../public/images/user-icon/iqra.jpg"
import jatoi from "../../../public/images/user-icon/jatoi.jpg"
import { LuDot } from "react-icons/lu";
import maaz from "../../../public/images/user-icon/maaz.jpg"
import Account from '../Account/Account'

const User = () => {
    return (
        <div className='text-white flex items-start justify-start flex-col h-[100vh] w-[400px] mt-20'>
            <Account username={"thats_seems_no_one"} name={"Kashan Adnan"} button={"Switch"} image={profile} />
            <div className='flex items-center justify-between w-[300px] mb-2 mt-2'>
                <h1 className='mb-4 text-[15px]'>Suggested for you</h1>
                <button className='mb-4 text-[15px]'>See All</button>
            </div>
            <Account username={"aroob_jatoi"} name={"Aroob Jatoi"} button={"Follow"} image={jatoi} />
            <Account username={"cristiano"} name={"Cristiano Ronaldo"} button={"Follow"} image={cristiano} />
            <Account username={"maazsafdar"} name={"Maaz Safdar"} button={"Follow"} image={maaz} />
            <Account username={"areeb_pervais"} name={"Areeb Pervais"} button={"Follow"} image={iqra} />
            <p className='flex items-center flex-wrap text-[11px] w-[270px] text-[rgba(255,255,255,0.4)] leading-5'>About<LuDot />
                Help<LuDot />
                Press<LuDot />
                API<LuDot />
                Jobs<LuDot />
                Privacy<LuDot />
                Terms<LuDot />
                Locations<LuDot />
                Language<LuDot />
                Meta Verified<LuDot /> </p>
            <p className='mt-5 text-[11px] w-[270px] text-[rgba(255,255,255,0.4)] leading-5'>© 2024 INSTAGRAM FROM META
            </p>
        </div>
    )
}

export default User