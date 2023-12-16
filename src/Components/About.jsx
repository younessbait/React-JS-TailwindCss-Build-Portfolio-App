import React from "react";
export default function About() {
  return (
    <div
      name='about'
      className='   w-full h-screen bg-gray-100 flex justify-center items-center '
    >
      <div className='md:shadow-2xl rounded-2xl md:bg-white md: w-[80%] md:h-[70%] md:grid md:grid-cols-2 '>
        <div className=' hidden md:block w-[100%] h-[100%]'>
          <img
            className='shadow-2xl rounded-l-2xl h-[100%]'
            src={"https://avatars.githubusercontent.com/u/126654217?v=4"}
          />
        </div>
        <div className="flex flex-col  items-start">
          <h1 className=' text-center text-3xl font-bold border-b-[6px] my-10 md:mx-[40px]  border-b-lime-300 '>About</h1>
          <h2 className=' md:mx-[40px] font-bold text-3xl  '> 
            Hi. I'm Youness Bait, nice to meet you. Please take a look around.
          </h2>
          <p className=' md:m-[40px] '>
            I am passionate about building excellent software that improves the
            lives of those around me. I specialize in creating software for
            clients ranging from individuals and small-businesses all the way to
            large enterprise corporations. What would you do if you had a
            software expert available at your fingertips?
          </p>
        </div>
      </div>
    </div>
  );
}
