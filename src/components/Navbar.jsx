import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import { Link } from 'react-scroll';
import { DiCode } from "react-icons/di";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-200 '>
      <div>
        <Link to='home' smooth={true} duration={500}>
        <DiCode className='w-10 h-10 cursor-pointer hover:text-gray-400'/>
        </Link>
      </div>

      {/* Menu */}
      
        <ul className='hidden md:flex'>
          <li className='hover:text-gray-400'>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='hover:text-gray-400'>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='hover:text-gray-400'>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='hover:text-gray-400'>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='hover:text-gray-400'>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      

      
      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer hover:text-gray-400'>
        {!nav ? <FaBars className="w-6 h-6"/> : <FaTimes className="w-6 h-6"/>}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-3xl hover:text-gray-400'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-gray-400'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-gray-400'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-gray-400'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-3xl hover:text-gray-400'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-blue-800'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://www.linkedin.com/">
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-gray-800'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="https://github.com/">
              Github <FaGithub size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] rounded-md hover:ml-[-10px] duration-300 bg-blue-800'>
            <a className='flex justify-between items-center w-full text-gray-300'
            href="mailto:dev@gmail.com">
              Email <HiOutlineMail size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar