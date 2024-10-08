import React from 'react'
import User from "../../components/User/User.jsx"
import Sidebar from "../../components/Sidebar/Sidebar.jsx"
import jatoi from "../../../public/images/user-icon/jatoi.jpg"
import cristiano from "../../../public/images/user-icon/cristiano.jpg"
import maaz from "../../../public/images/user-icon/maaz.jpg"
import sundar from "../../../public/images/user-icon/sundar.jpg"
import neelam from "../../../public/images/user-icon/neelam.jpg"
import Story from '../../components/Story/Story.jsx'
import post from "../../../public/images/posts/sundar-cancer.png"
import Post from '../../components/Post/Post.jsx'

const Home = () => {
    return (
        <div className="w-full h-[100vh] bg-black flex items-center justify-between overflow-hidden">
            <Sidebar />
            <div className='flex items-start justify-start flex-col p-[20px] text-white overflow-y-scroll w-[850px] h-[100vh] border-l border-[rgba(255,255,255,0.1)]'>
                <div className="flex items-center justify-center m-[20px] mb-[30px]">
                    <Story image={jatoi} username={"aroob_jatoi"} />
                    <Story image={cristiano} username={"cristiano"} />
                    <Story image={maaz} username={"maazasafder"} />
                    <Story image={neelam} username={"neelammu.."} />
                </div>
                <Post username={"sundarpichai"} verified={true} location={"Paris, France"} image={post} profile={sundar} likes={"123,543,232"} description={"While in Paris yesterday I had the chance to visit the"} comments={665} />
            </div>
            <User />
        </div>
    )
}

export default Home