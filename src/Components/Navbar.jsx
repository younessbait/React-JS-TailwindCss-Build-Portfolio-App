import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-scroll";
export default function Navbar() {
  const [nav, setnav] = useState(true);
  const handleNav = () => setnav(!nav);
  const [scrolnav, setscrolnav] = useState(false);
  const chamgeback = () => {
    window.scrollY >= 80 ? setscrolnav(true) : setscrolnav(false);
  };
  window.addEventListener("scroll", chamgeback);
  return (
    // ? LOGO
    <div
      name='navbar'
      className={
        scrolnav == true
          ? "z-10 text-white fixed w-full bg-gradient-to-r from-blue-600 via-lime-400  to-lime-500 justify-between items-center flex h-[80px] px-4"
          : "z-10  text-white  fixed w-full  justify-between items-center flex h-[80px] px-4"
      }
    >
      <div className=' w-[50px]  '>
        <img
          src={
            "https://seeklogo.com/images/M/microsoft-365-copilot-logo-44BA459F18-seeklogo.com.png"
          }
        />
      </div>
      {/* 
     // ? MENU 
     */}
      <ul className=' hidden md:flex text-2xl   '>
        <li className='  hover:text-white '>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=' hover:text-white '>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=' hover:text-white '>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=' hover:text-white'>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=' hover:text-white'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* 
      // ? GiHamburgerMenu
       */}
      <div
        onClick={handleNav}
        className={
          scrolnav == true
            ?' md:hidden text-4xl z-10 cursor-pointer text-white'
            : ' md:hidden text-4xl z-10 cursor-pointer text-lime-300'
        }
      >
        {!nav ? <IoClose /> : <GiHamburgerMenu />}
      </div>
      {/* 
       // ? MOBIELMENU
        */}
      <ul
        className={
          !nav
            ? " md:hidden absolute left-0 top-0 w-full h-screen flex flex-col  bg-black justify-center items-center  z-1 text-white "
            : " hidden"
        }
      >
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-4  text-3xl'>
          <Link onClick={handleNav} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* 
      // ? social icons 
      */}
      <div className='fixed hidden lg:flex flex-col left-0 top-[35%]  '>
        <ul>
          <li className=' flex justify-between items-center w-[200px] h-[60px] ml-[-129px] hover:ml-[-16px] duration-300'>
            <a
              target='_blank'
              className='  text-blue-50  h-[100%] bg-blue-500 text-3xl  flex justify-between items-center w-full '
              href='https://www.linkedin.com/in/mern-bayt/'
            >
              <p className='ml-1'>Linkden</p>
              <AiOutlineLinkedin className='text-6xl mr-1' />
            </a>
          </li>
          <li className=' flex justify-between items-center w-[200px] h-[60px] ml-[-129px] hover:ml-[-16px] duration-300'>
            <a
              target='_blank'
              className='  text-blue-50 w-[100%] h-[100%]  bg-black text-3xl  flex justify-between items-center w-full '
              href='https://github.com/younessbait'
            >
              <p className='ml-1'>Github </p>{" "}
              <FaGithubSquare className='text-5xl mr-1' />
            </a>
          </li>
          <li className=' flex justify-between items-center w-[200px] h-[60px] ml-[-129px] hover:ml-[-16px] duration-300'>
            <a
              target='_blank'
              className='  text-blue-50 w-[100%] h-[100%]  bg-red-600	 text-3xl  flex justify-between items-center w-full '
              href='https://mail.google.com/mail/u/0/#inbox'
            >
              <p className='ml-1'>Email </p>{" "}
              <MdEmail className='text-5xl mr-1' />
            </a>
          </li>
          <li className=' flex justify-between items-center w-[300px] h-[60px] ml-[-229px] hover:ml-[-69px] duration-300'>
            <a
              target='_blank'
              className='  text-blue-50 w-[100%] h-[100%]  bg-blue-800	 text-3xl  flex justify-between items-center w-full '
              href='https://www.facebook.com/profile.php?id=100070135002753'
            >
              <p className='ml-[55px]'>Facebook </p>{" "}
              <FaFacebook className='text-5xl mr-1' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
