import React from 'react'

const OnlineUser = ({ image, username }) => {
    return (
        <span className='flex items-center justify-center flex-col mx-[5px]'>
            <img className='rounded-full p-[2px] w-[58px] mr-[10px]  border-orange-500 border-2' src={image} />
            <p className='text-[11px] mt-[5px] text-[rgba(255,255,255,0.6)'>{username}</p>
        </span>
    )
}

export default OnlineUser