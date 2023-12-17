import React from "react";
import "../index.css";
import chat from "../Images/chatApp.webp";
import Bounce from "react-reveal/Bounce";
import Docter from "../Images/medical.avif";
import ecommerc from "../Images/ecommerce.png";

export default function Work() {
  return (
    <div
      name='work'
      className=' bg-lime-600 w-full h-screen text-white flex flex-col justify-center items-center '
    >
      <Bounce left>
        <h1 className=' my-[20px] text-3xl font-bold border-b-[6px] border-b-lime-300 '>
          Work
        </h1>
      </Bounce>
      <Bounce top>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
          <div
            style={{ backgroundImage: `url(${chat})` }}
            className=' md:w-[350px] md:h-[250px] rounded-md work md:ml-[30px] w-[250px]  h-[180px] duration-300 grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden md:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                Chat Application{" "}
              </span>
              <div className='grid grid-cols-2 gap-5'>
                <a href='/'>
                  <button className=' p-[15px] w-[100px] rounded-md bg-gray-800 font-bold '>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className=' p-[15px] bg-gray-800 w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Docter})` }}
            className='  md:w-[350px] md:h-[250px] rounded-md work md:ml-[30px] w-[250px]  h-[180px] duration-300  grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden md:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                Medical Website{" "}
              </span>
              <div className='grid grid-cols-2 gap-5'>
                <a href='/'>
                  <button className=' p-[15px] w-[100px] rounded-md bg-gray-800 font-bold '>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className=' p-[15px] bg-gray-800 w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${ecommerc})` }}
            className=' rounded-md work md:ml-[30px] md:w-[350px] md:h-[250px] w-[250px]  h-[180px] duration-300 grid grid-cols-1 gap-3 md:gap-[40px] md:grid-cols-3  '
          >
            {/*
        // todo: animation the project
         */}
            <div className=' md:w-[389%] hidden md:flex flex-col justify-center items-center duration-300 rounded-md effect opacity-0 hover:opacity-100 '>
              <span className='font-bold mb-[50px] text-2xl'>
                E-commerce Website{" "}
              </span>
              <div className='grid grid-cols-2 gap-5'>
                <a href='/'>
                  <button className=' p-[15px] w-[100px] rounded-md bg-gray-800 font-bold '>
                    Demo
                  </button>
                </a>
                <a href='/'>
                  <button className=' p-[15px] bg-gray-800 w-[100px] rounded-md font-bold'>
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Bounce>
    </div>
  );
}
