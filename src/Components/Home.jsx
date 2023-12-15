import React from "react";
import { GrNext } from "react-icons/gr";
import "../index.css";
import Bgvideo from "../Videos/pexels.mp4";
export default function Home() {
  return (
    <div
      name='home'
      className='  w-full h-screen flex justify-center items-center'
    >
      <video
        src={Bgvideo}
        autoPlay
        muted
        loop
        className='  w-[100%] h-[100vh] absolute top-0 z-[-1] object-cover'
      />
      <div className="blur-overlay"></div>
      <div className=' text-white flex flex-col justify-center h-full  ml-[40px] mr-[30px] lg:ml-[250px]   '>
        <p className='z-[1] text-lime-300 my-4 font-bold'>Hi, my name is </p>
        <h1 className=' z-[1] font-bold text-5xl  mb-4'> YOUNESS BAIT</h1>
        <h2 className=' text-lime-400 z-[1]  font-bold text-5xl  mb-4'>
          I'm a Full Stack Developer.
        </h2>
        <p className='z-[1]  mb-4'>
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div className="z-[1]">
          <button className='   flex justify-between items-center bg-black-600 p-[15px] border-2 hover:bg-lime-500'>
            View Work <GrNext className='z-[1] ml-2 text-xl' />
          </button>
        </div>
      </div>
    </div>
  );
}
