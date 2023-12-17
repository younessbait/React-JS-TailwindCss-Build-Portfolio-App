import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { GrNext } from "react-icons/gr";
import "../index.css";
import Flip from "react-reveal/Flip";
import Bgvideo from "../Videos/pexels.mp4";
import Bounce from "react-reveal/Bounce";
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
      <div className='blur-overlay'></div>
      <div className=' text-white flex flex-col justify-center h-full  ml-[40px] mr-[30px] lg:ml-[250px]   '>
        <p className='z-[1] text-lime-300 my-4 font-bold'></p>
        <Bounce right cascade>
          <h1 className=' z-[1]  text-5xl  mb-4'>WELCOME</h1>
        </Bounce>
        <Bounce left cascade>
          <h2 className=' text-lime-100 z-[1]  font-bold text-5xl  mb-4'>
            I'm {"  "}
            <span
              className='bg-gradient-to-r from-blue-600 via-lime-400 to-lime-500 inline-block text-transparent bg-clip-text'
              style={{ fontWeight: "bold" }}
            >
              <Typewriter
                words={["YOUNESS BAIT", " a Full Stack Developer."]}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h2>
        </Bounce>
        <Bounce right cascade>
          <p className='z-[1]  mb-4'>
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
        </Bounce>
        <div className='z-[1]'>
          <Flip left>
            <button className='  flex justify-between items-center  p-[15px] border-2 bg-gradient-to-r from-blue-600 via-lime-400  to-lime-500  '>
              View Work <GrNext className='z-[1] ml-2 text-xl' />
            </button>
          </Flip>
        </div>
      </div>
    </div>
  );
}
