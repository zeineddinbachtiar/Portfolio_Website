import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-left'>
      <div className='max-w-[1280px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            JUST A REGULAR PERSON WITH AN AMAZING DREAM
          </p>
          <h1 className='py-4 text-black-700'>
            Hi there, you can call me <span className='text-[#5651e5]'>Zein </span>
          </h1>
          <h2 className='py-2 text-gray-500'>A Fresh Graduate from Computer Engineering of Institut Teknologi Sepuluh Nopember</h2>
          <p className='py-4 text-gray-800 sm:max-w-[80%] m-auto text-right'>
            Hi, I'm Zein (short for Zeineddin Ahmad Bachtiar), a fresh graduate in Computer Engineering from Institut Teknologi Sepuluh Nopember (ITS) Surabaya. I'm a curious, energetic, and adaptable person who enjoys learning new things and exploring different fields. I have a strong interest in technology and its potential to solve real-world problems. With an active mindset and eagerness to grow, I'm always open to new challenges and opportunities to expand my knowledge and skills. 
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/zeineddin-bachtiar-8095241a5/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/zeineddinbachtiar'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='https://mail.google.com/mail/u/0/?fs=1&to=zeineddinbachtiar@gmail.com&su=Hello%20Zein&body=%27%27&bcc=%27%27&tf=cm'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </a>
            <a
              href='https://drive.google.com/file/d/1sJmCZGuJK_oN0shqTgUb1Yezuv0QXX1r/view?usp=drive_link'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
