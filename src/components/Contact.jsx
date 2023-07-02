import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-fit bg-[#0a192f] flex justify-center items-center p-4 pt-24 sm:h-screen'>
      <form method='POST' action='https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-600 text-gray-200'>Contact</p>
          <p className='text-gray-400 py-4'>Submit the form below or shoot me an email.</p>
        </div>
        <input className='bg-transparent border-2 rounded-md border-gray-400 p-2 text-gray-400' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-transparent border-2 rounded-md border-gray-400 text-gray-400' type='email' placeholder='Email' name='email' />
        <textarea className='bg-transparent border-2 rounded-md border-gray-400 p-2 text-gray-400' name='message' rows='10' placeholder='Message'></textarea>
        <button className='text-gray-200 rounded-md border-2 border-gray-400 hover:bg-blue-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  );
};

export default Contact;
