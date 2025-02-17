import { GoProjectSymlink } from "react-icons/go";
import { LuContact } from "react-icons/lu";
import React from 'react';

const HeroHadi = () => {
  return (
    <section className='max-w-[90%] border-t border-text border-opacity-5 lg:max-w-[80%] min-h-screen max-h-fit py-24 m-auto flex flex-col items-center justify-center space-y-10'>
      <span>
        <h2 className='text-white text-4xl sm:text-5xl font-bold'>My Partner</h2>
        <div className='max-w-[90px] h-[1px] bg-white mt-6'></div>
      </span>
      <img src="/abdulhadi.jpg" alt="Logo" className='max-w-[256px] sm:max-w-[384px] max-h-[512px] object-cover aspect-[2/3] grayscale-[100%] rounded-full hover:rounded-full transition-all' />

      <div className='flex flex-col space-y-5 text-center items-center'>
        <span className='flex flex-row items-end space-x-2 space-y-0'>
          <p className='text-text text-xl font-light opacity-70'>Hi, I'm</p>
          <h1 className='text-4xl text-text font-semibold'>Abdul Hadi</h1>
        </span>

        <p className='text-text text-lg font-light max-w-[600px]'>
          Multifaceted Expertise. Highly skilled A1 developer, picture editor, media guru, and account manager. Bringing unparalleled expertise to drive innovative solutions and exceptional results.
        </p>
      </div>
    </section>
  );
};

export default HeroHadi;
