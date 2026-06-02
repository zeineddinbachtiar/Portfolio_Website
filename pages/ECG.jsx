import Image from 'next/image';
import React from 'react';
import ECG from '../public/assets/projects/ECG_PIC.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const game = () => {
  return (
    <div className='w-full'>
      <div 
        className='w-screen h-[70vh] relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${ECG.src || ECG})` }}
      >
        {/* Gradient overlay - darker at bottom where text is */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-4xl font-bold drop-shadow-2xl'>ECGuard : Wireless ECG Monitoring System</h2>
          <h3 className='text-xl drop-shadow-lg'>ESP32 / Web Dashboard</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
           ECGuard is a wireless heartbeat and ECG monitoring system designed to provide continuous real-time health tracking in a compact and affordable form. The system uses the AD8232 ECG module to measure heartbeat signals, which are then processed and transmitted via ESP32 over Wi-Fi.

           The data is streamed in real time to a responsive web dashboard, where users can view their ECG waveform and BPM (beats per minute) directly from any device. The dashboard is designed to be clean, intuitive, and accessible, allowing both users and healthcare providers to monitor heart activity without relying on bulky or expensive equipment.

           This project combines embedded systems, IoT, and web technologies, highlighting how hardware and software integration can create meaningful solutions. Beyond the technical side, ECGuard also reflects my interest in applying technology to healthcare and real-world impact applications.
           </p>
          <a
            href='https://github.com/zeineddinbachtiar/ECGuard_FE'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Source Code Frontend</button>
          </a>
          <a
            href='https://github.com/zeineddinbachtiar/ECGuard_BE'
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
                <RiRadioButtonFill className='pr-1' /> Embedded C (ESP32)
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> AD8232
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Wi-Fi communication
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Websocket
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node.js
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