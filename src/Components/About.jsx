import React from "react";

export default function About() {
  return (
    <div name="about" className=" bg-gray-400	  w-full h-screen text-white flex justify-center items-center ">
      <div className="flex flex-col justify-between items-center">
        <h1 className=" my-[50px] text-3xl font-bold border-b-[6px] border-b-lime-300 ">
          About
        </h1>
        <div className="  md:flex justify-between items-center  ">
          <div>
          <img className="shadow-2xl shadow-black  hidden md:block mr-[120px] w-[300px] h-[300px]" src={"https://media.licdn.com/dms/image/D4E03AQFCHF1GeCLBnA/profile-displayphoto-shrink_800_800/0/1694608432822?e=2147483647&v=beta&t=jzokwWK5WZm-kWDZF_z5IZ1mI0OsyBqDShN18Bd57XE"} alt="" />
          </div>
         <div>
         <h2 className="w-[280px] mr-[25px]  mb-[20px] font-bold md:text-3xl md:w-[300px] ">
            Hi. I'm Youeness Bait, nice to meet you. Please take a look around.
          </h2>
          <p className=" md:text-3xl w-[300px]  md:w-[600px]">
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
         </div>
        </div>
      </div>
    </div>
  );
}
