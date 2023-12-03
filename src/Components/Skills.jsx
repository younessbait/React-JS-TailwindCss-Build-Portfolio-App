
import React from "react";

export default function Skills() {
  return (
    <div name="skills" className="flex flex-col   bg-gray-800 w-full justify-center h-screen text-white  items-center">
      <h1 className=" my-[50px] text-3xl font-bold border-b-[6px] border-b-lime-300 ">
      Skills
      </h1>
      <div className="w-[350px] grid grid-cols-4 md:w-[500px]  md:grid-cols-5 gap-10">
                <img className=' hover:scale-125 duration-300' src={"https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/html.png?raw=true"} />
                <img className=' hover:scale-125 duration-300' src={"https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/css.png?raw=true"} />
                <img className=' hover:scale-125 duration-300' src={"https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/javascript.png?raw=true"} />
                <img className='  hover:scale-125 duration-300' src={"https://velog.velcdn.com/images/diso592/post/8c07ebac-2637-48b8-ae55-41915e2e30bf/image.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://github.com/fireclint/portfolio-app-react/blob/main/src/assets/react.png?raw=true"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_plain_logo_icon_146422.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://res.cloudinary.com/practicaldev/image/fetch/s--RpUfSAFP--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8otweo5ef6kwc26rmxe5.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://static-00.iconduck.com/assets.00/github-emoji-2048x2021-w2ge0ghn.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://cdn.worldvectorlogo.com/logos/postman.svg"} />
                <img className=' mb-[20px] hover:scale-125 duration-300' src={"https://www.codercrunch.com/content/skill/images/uml-f.png"} />
      </div>
    </div>
  );
}
