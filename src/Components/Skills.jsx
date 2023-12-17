import React from "react";
import Bounce from "react-reveal/Bounce";
export default function Skills() {
  return (
    <div
      name='skills'
      className='flex flex-col  bg-gray-100  w-full justify-center h-screen text-black  items-center'
    >
      <Bounce left>
        <h1 className=' text-3xl font-bold border-b-[6px] border-b-lime-300 '>
          Skills
        </h1>
      </Bounce>
      <div className='md:flex  	  justify-center items-center   md:w-[80%] md:h-[60%] '>
        <Bounce left>
          <div className='border-[3px] mx-3 border-lime-400 rounded-xl md:shadow-lg md:mr-[10%] mt-[10%] md:h-[86%] md:w-[40%] md:bg-white '>
            <h2 className=' text-center font-bold mt-5 text-3xl'>Frontend</h2>
            <div className='w-[80%] mt-[10%] grid grid-cols-4 md:grid-cols-4 gap-10 m-[20px]'>
              <img
                className=' hover:scale-125 duration-300'
                src={
                  "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true"
                }
              />
              <img
                className=' hover:scale-125 duration-300'
                src={
                  "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true"
                }
              />
              <img
                className=' hover:scale-125 duration-300'
                src={
                  "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true"
                }
              />
              <img
                className=' hover:scale-125 duration-300'
                src={
                  "https://velog.velcdn.com/images/diso592/post/8c07ebac-2637-48b8-ae55-41915e2e30bf/image.png"
                }
              />
              <img
                className=' hover:scale-125 duration-300'
                src={
                  "https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true"
                }
              />
            </div>
          </div>
        </Bounce>
        <Bounce left>
          <div className='border-[3px] mx-3 border-lime-400  rounded-xl md:shadow-lg mt-[2%] md:mt-[10%] md:w-[40%] md:bg-white '>
            <h2 className=' text-center font-bold mt-5 text-3xl'>Backend</h2>
            <div className='w-[80%] grid grid-cols-4 gap-10 m-[20px]'>
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_logo_icon_146422.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://static-00.iconduck.com/assets.00/github-emoji-2048x2021-w2ge0ghn.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={"https://cdn.worldvectorlogo.com/logos/postman.svg"}
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://www.codercrunch.com/content/skill/images/uml-f.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--RpUfSAFP--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8otweo5ef6kwc26rmxe5.png"
                }
              />
              <img
                className='  hover:scale-125 duration-300'
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
                }
              />
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}
