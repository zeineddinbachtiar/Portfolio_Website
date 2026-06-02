import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/mypic3.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
          
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-800'>
            Hi, I'm Zeineddin Ahmad Bachtiar, a Computer Engineering graduate from Institut Teknologi Sepuluh Nopember (ITS). I have a strong interest in embedded systems, IoT development, and full-stack web technologies, with experience in creating real-time monitoring systems, data analytics tools, and interactive dashboards. I enjoy working on projects that connect hardware and software into practical solutions.
          </p>
          <p className='py-2 text-gray-800'>
            I am passionate about leveraging technology to solve real-world problems while continuously learning and exploring new frameworks. With a detail-oriented and adaptive mindset, I'm always eager to collaborate, share ideas, and contribute to projects that bring innovation and impact.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
