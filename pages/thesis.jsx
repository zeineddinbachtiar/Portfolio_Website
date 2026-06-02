import Image from 'next/image';
import React from 'react';
import Thesis from '../public/assets/projects/thesis_pic.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const game = () => {
  return (
    <div className='w-full'>
      <div 
        className='w-screen h-[70vh] relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${Thesis.src || Thesis})` }}
      >
        {/* Gradient overlay - darker at bottom where text is */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-4xl font-bold drop-shadow-2xl'>Thesis : IoT Based Machine Life Monitoring on Lathe Machine</h2>
          <h3 className='text-xl drop-shadow-lg'>ESP32 / Next.js / Express.js / MongoDB</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
           This thesis focuses on developing an IoT-based machine life monitoring system for lathe machines, aiming to improve efficiency and predictive maintenance in manufacturing environments. The system is designed to track two key parameters: machine RPM and operational lifetime (active usage time).

           At the hardware level, the solution is built on the ESP32 microcontroller combined with the Omron E3Z-D61 sensor. The sensor detects machine rotation, while the ESP32 processes the signals, calculates RPM, and records active operating hours. The collected data is then transmitted wirelessly over Wi-Fi to a central server for storage and analysis.

           For the software side, the project implements a web-based dashboard developed using Next.js for the frontend and Express.js with MongoDB for the backend. 
           </p>
           <br />
           <p>
           This dashboard provides real-time visualization of machine performance, including live RPM data, usage history, and total machine life hours. With this information, operators and managers can make data-driven decisions, anticipate maintenance schedules, and reduce unexpected downtimes.

           This project demonstrates the integration of embedded systems, industrial sensors, IoT communication, and full-stack web development into a unified solution. It highlights how modern technology can be applied to traditional machinery, making manufacturing processes smarter and more reliable.
          </p>
          <a
            href='https://github.com/zeineddinbachtiar/Dashboard_Monitoring_Frontend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Source Code Frontend</button>
          </a>
          <a
            href='https://github.com/zeineddinbachtiar/Dashboard_Monitoring_Backend'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Source Code Backend</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> ESP32
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Omron E3Z-D61 sensor
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Wi-Fi communication
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Websocket
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Express.js
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default game;