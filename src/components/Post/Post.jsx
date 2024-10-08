import React from 'react'
import { LuDot } from "react-icons/lu"
import { BsThreeDots } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FiMessageCircle } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Post = ({ profile, username, location, verified, image, likes, description, comments }) => {
    return (
        <div className="w-full flex items-center justify-center mb-[40px] flex-col">
            <div className="flex items-center justify-between w-[500px]">
                <div className="flex items-start justify-center">
                    <img className='w-[38px] objct-cover rounded-full mr-[13px] ' src={profile} alt="" />
                    <span className='font-semibold text-[15px]'>
                        <div className='flex items-center justify-center'>
                            <p className='mr-2'>{username}</p><svg aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
                        </div>
                        <div>
                            <p className='text-[12px]'>{location}</p>
                        </div>

                    </span>
                    <span className='text-[rgba(255,255,255,0.6)] text-[14px] flex items-center'><LuDot className='text-[24px]' /> 3w</span>
                </div>
                <BsThreeDots />
            </div>
            <div>
                <img src={image} alt="" className='w-[500px] rounded-sm mt-4' />
            </div>
            <div className="w-[500px]  flex item-centers justify-start flex-col text-left">
                <div className="flex items-center justify-between w-full mt-[10px]">
                    <div className="flex items-center justify-cneter text-[24px]">
                        <CiHeart className='mr-2 text-[33px]' />
                        <FiMessageCircle className='mr-2 text-[25px]' />
                        <IoPaperPlaneOutline className='mr-2 text-[25px]' />
                    </div>
                    <div>
                        <svg aria-label="Save" class="x1lliihq x1n2onr6 x5n08af" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
                    </div>
                </div>
                <p className='mt-2 text-[14px]'>{likes} likes</p>
                <p className='flex items-start justify-start w-[100%] mt-1 text-[15px]'>{username}
                    <svg className='ml-[2px] mt-[6px]' aria-label="Verified" class="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="30"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fill-rule="evenodd"></path></svg>
                    <p className='text-[14px] w-full'>
                        {description} <span className='text-[rgba(255,255,255,0.6)]'>... more</span>
                    </p>
                </p>
                <p>
                </p>
                <button className='w-full text-left my-1 text-[rgba(255,255,255,0.6)] text-[15px]'>View all {comments} comments</button>
                <input type="text" className='bg-transparent text-[15px] outline-none border-b pb-4 mt-1 border-[rgba(255,255,255,0.6)] placeholder:text-[rgba(255,255,255,0.8)]' placeholder='Add a comment...' />
            </div>
        </div>
    )
}

export default Post