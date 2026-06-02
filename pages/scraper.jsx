import Image from 'next/image';
import React from 'react';
import GMaps from '../public/assets/projects/google_maps.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const game = () => {
  return (
    <div className='w-full'>
      <div 
        className='w-screen h-[70vh] relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${GMaps.src || GMaps})` }}
      >
        {/* Gradient overlay - darker at bottom where text is */}
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-10' />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-4xl font-bold drop-shadow-2xl'>Google Maps Review Scraper</h2>
          <h3 className='text-xl drop-shadow-lg'>Python / Selenium / Pandas / Chromedriver </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
           This project is a data scraping tool designed to collect and analyze user reviews from Google Maps. Using Selenium and ChromeDriver, the scraper automates the browsing process, navigates to a specific business or location, and extracts review data such as reviewer name, rating, date, and review text.

           The extracted data is then processed and structured using Pandas, enabling further cleaning, filtering, and analysis. With this workflow, large volumes of Google Maps reviews can be transformed into structured datasets for sentiment analysis, customer behavior insights, or business intelligence applications.

           This project showcases practical experience in web automation, data extraction, and preprocessing pipelines, bridging raw unstructured data into meaningful insights.
          </p>
          <a
            href='https://github.com/zeineddinbachtiar/Crawling_Google_Maps'
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
                <RiRadioButtonFill className='pr-1' /> Python
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Selenium
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Pandas
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chromedriver
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