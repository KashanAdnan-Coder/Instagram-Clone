import React from 'react'

const Account = ({ name, username, image, button }) => {
    return (
        <div className="flex items-center justify-between w-[300px] mb-[20px]">
            <div className='flex items-center justify-center'>
                <img src={image} className='w-[45px] rounded-full object-cover' alt="" />
                <div className="flex items-start justify-start flex-col ml-[10px]">
                    <span className='text-[13px]'>{username}</span>
                    <span className='text-[13px] text-[rgba(255,255,255,0.6)]'>{name}</span>
                </div>
            </div>
            <button className='text-[rgb(71,71,255)] text-[12px]'>{button}</button>
        </div>
    )
}

export default Account