import React from 'react';
import ParticlesBg from "particles-bg";
import { Link } from 'react-scroll';
import '../index.css';


const Home = () => {
  return (
    
    <div name='home' className='w-full h-screen '>
      

      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-600 text-xl'>Hi, my name is</p>
        <h1 className='text-4xl smtext-7xl font-bold text-gray-200'>Bob Doe</h1>
        <h2 className='text-4xl smtext-7xl font-bold text-gray-400'>I'm a Full Stack Developer.</h2>
        <p className='text-gray-400 py-4 max-w-[700px]'>I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.</p>
        <div>
          <button className='text-gray-200 border-2 border-gray-400 px-6 py-3 my-2 flex items-center rounded-md hover:bg-blue-600'>
          <Link to='work' smooth={true} duration={500}>
            View Work
          </Link>
          </button>
        </div>
      </div>
      <ParticlesBg color="#0c387b" num={5} type="circle" bg={true} />
    </div>
  )
}

export default Home