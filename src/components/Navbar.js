"use client"
import { FiMenu } from "react-icons/fi";
import React, { useState } from 'react';
import Link from "next/link";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const toggleMenu = () => {
        setToggle(!toggle);
    };

    return (
        <div className="w-full bg-foreground bg-opacity-50 backdrop-blur-md text-text h-20 px-4 sm:px-8 md:px-16 lg:px-24 flex items-center justify-between fixed top-0 z-50">
            <Link href='/' className='font-bold text-xl sm:hover:scale-105 transition-all'>ZainicalEditx</Link>

            <button onClick={toggleMenu} className="sm:hidden focus:outline-none">
            <FiMenu />
            </button>

            <ul className={`hidden sm:flex flex-row space-x-8`}>
                <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#home'>Home</a></li>
                <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#about'>About</a></li>
                <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#contact'>Contact</a></li>
                <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#projects'>Projects</a></li>
            </ul>

            {toggle && (
                <ul className={`w-screen h-screen p-8 overflow-hidden bg-foreground bg-opacity-50 backdrop-blur-md flex flex-col items-center justify-start space-y-8 fixed top-20 left-0 z-10`}>
                    <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#home'>Home</a></li>
                    <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#about'>About</a></li>
                    <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#contact'>Contact</a></li>
                    <li><a className='border-b-2 border-transparent hover:border-text transition-all' href='#projects'>Projects</a></li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;