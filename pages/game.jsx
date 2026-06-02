import Image from 'next/image';
import React from 'react';
import Game from '../public/assets/projects/game.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const game = () => {
  return (
    <div className='w-full'>
      <div 
        className='w-screen h-[70vh] relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${Game.src || Game})` }}
      >
        {/* Gradient overlay - darker at bottom where text is */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-4xl font-bold drop-shadow-2xl'>Story in Summer</h2>
          <h3 className='text-xl drop-shadow-lg'>C++ / SFML</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
           This project is a classic-inspired 2D shooter game that I built from scratch using the SFML library in C++ on Windows OS. The game takes its visual assets from a legendary title that almost everyone already knows, but the gameplay is fully original.

           The player controls the shooter with the WASD keys, moving around the screen to aim and dodge. Meanwhile, waves of enemies continuously fall from the top of the screen toward the bottom. The mission is straightforward yet challenging: shoot as many enemies as possible while avoiding direct contact. Each collision decreases the player’s health, and once it reaches zero, the game ends.

           This project was not only a fun way to explore game development, but also a learning experience in graphics rendering, event handling, and collision detection. It demonstrates my ability to combine problem-solving skills with creativity, while implementing real-time mechanics in a desktop application.
          </p>
          <a
            href='https://github.com/zeineddinbachtiar/Story-in-Summer'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Source Code</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> C++
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SFML
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