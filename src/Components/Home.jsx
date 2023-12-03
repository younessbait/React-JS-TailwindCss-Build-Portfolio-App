import React from "react";
import { GrNext } from "react-icons/gr";
import "../index.css";
export default function Home() {
  return (
    <div
      name="home"
      className=" bg-gray-800 w-full h-screen flex justify-center items-center"
    >
      <div className=" text-white flex flex-col justify-center h-full  ml-[40px] mr-[30px] lg:ml-[250px]  ">
        <p className="text-lime-300 my-4 font-bold">Hi, my name is </p>
        <h1 className=" font-bold text-5xl  mb-4"> YOUNESS BAIT</h1>
        <h2 className=" text-gray-400  font-bold text-5xl  mb-4">
          I'm a Full Stack Developer.
        </h2>
        <p className=" mb-4">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className=" flex justify-between items-center bg-black-600 p-[15px] border-2 hover:bg-lime-500">
            View Work <GrNext className="ml-2 text-xl" />
          </button>
        </div>
      </div>
      <div className="  hidden lg:block w-[80%] text-7xl animate-move-up-down ">
        <img
          src={
            "https://cdni.iconscout.com/illustration/premium/thumb/web-development-3454628-2918517.png"
          }
        />
      </div>
    </div>
  );
}
