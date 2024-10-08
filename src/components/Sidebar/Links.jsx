import React from 'react'
import { GoHomeFill, GoSearch } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { PiFilmReelLight } from "react-icons/pi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { CiHeart, CiSquarePlus } from "react-icons/ci";
import profile from "../../../public/images/user-icon/profile.png"

const Links = () => {
    const links = [
        {
            icon: <GoHomeFill className="text-[27px] text-white" />,
            title: "Home",
            select: true
        },
        {
            icon: <GoSearch className="text-[27px] text-white" />,
            title: "Search",
            select: false
        },
        {
            icon: <MdOutlineExplore className="text-[27px] text-white" />,
            title: "Explore",
            select: false
        },
        {
            icon: <PiFilmReelLight className="text-[27px] text-white" />,
            title: "Reels",
            select: false
        },
        {
            icon: <BiMessageRoundedDots className="text-[27px] text-white" />,
            title: "Messages",
            select: false
        },
        {
            icon: <CiHeart className="text-[27px] text-white" />,
            title: "Notification",
            select: false
        },
        {
            icon: <CiSquarePlus className="text-[27px] text-white" />,
            title: "Create",
            select: false
        },
        {
            icon: <img src={profile} className='w-[27px]' />,
            title: "Profile",
            select: false
        },
    ]
    return (
        <ul className='mb-[20px]'>
            {
                links.map((item) => (
                    <li key={item.title} className={`text-white flex items-center justify-start mb-[9px] cursor-pointer w-[180px] p-[10px] rounded-sm`}>
                        {item.icon}
                        <p className={`text-[15px] ml-[16px] ${item.select ? "font-bold" : ""}`}>{item.title}</p>
                    </li>
                ))
            }
        </ul>
    )
}

export default Links