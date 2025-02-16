import { GoProjectSymlink } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import React from 'react';

const HeroAli = () => {
  return (
    <section id="home" className='max-w-[90%] lg:max-w-[80%] min-h-screen max-h-fit py-24 m-auto flex flex-col lg:flex-row items-center justify-center space-y-10 lg:space-y-0 lg:space-x-10'>
      <img src="/alizain.jpg" alt="Logo" className='max-w-[256px] sm:max-w-[384px] max-h-[512px] object-cover aspect-[2/3] grayscale-[100%] rounded-full hover:rounded-full transition-all' />

      <div className='flex flex-col space-y-5 text-center lg:text-left'>
        <span className='flex flex-row items-end space-x-4'>
          <p className='text-text text-xl font-light opacity-70'>Hi, I'm</p>
          <h1 className='text-4xl text-text font-semibold'>Malik Ali Zain</h1>
        </span>

        <p className='text-text text-lg font-light max-w-[600px]'>
          I'm Ali Zain, a meticulous video editor driven by a passion for storytelling. With a keen eye for detail and a relentless pursuit of perfection, I craft compelling narratives that captivate audiences and leave a lasting impression.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 py-4">
          <button className="bg-[#5933ff] hover:scale-105 transition-all w-fit py-2 px-8 rounded-full flex gap-4 items-center text-text font-medium text-lg">
            Projects <GoProjectSymlink />
          </button>
          <button className="hover:bg-[#5933ff] hover:scale-105 transition-all border-[#5933ff] border-[3px] w-fit py-2 px-8 rounded-full flex gap-4 items-center text-text font-medium text-lg">
            Contact <LuContact />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroAli;