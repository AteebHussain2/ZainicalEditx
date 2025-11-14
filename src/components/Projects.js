"use client"
import React from 'react';
import ScrollingText from './ScrollingText';

const Projects = () => {
    const videos = [
        { link: '/videos/video1.mp4' },
        { link: '/videos/video2.mp4' },
        { link: '/videos/video4.mp4' },
    ]

    const photos = {
        link1: '/thumbnails/image1.jpg',
        link2: '/thumbnails/image2.jpg',
        link3: '/thumbnails/image3.jpg',
        link3: '/thumbnails/image4.jpg',
    }

    return (
        <section id='projects' className='max-w-[90%] lg:max-w-[80%] h-auto py-20 flex flex-col space-y-16 justify-center items-center mx-auto'>
            <span className='text-center'>
                <h2 className='text-white text-4xl sm:text-5xl font-bold'>My Projects</h2>
                <div className='max-w-[90px] h-[1px] bg-white mt-6 mx-auto'></div>
            </span>

            <div className='w-full flex flex-col space-y-10'>
                <span>
                    <h2 className='text-white text-3xl sm:text-4xl font-semibold'>My Thumbnails</h2>
                    {/* <div className='max-w-[90px] h-[0.5px] bg-white mt-4'></div> */}
                </span>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    {Object.values(photos).map((photo, index) => (
                        <div
                            key={index}
                            className='w-full h-auto aspect-video hover:scale-105 transition-all rounded-lg overflow-hidden'>
                            <img
                                src={photo}
                                alt="Thumbnail Image"
                                className='w-full h-full object-cover rounded-lg'
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-full flex flex-col space-y-10'>
                <span>
                    <h2 className='text-white text-3xl sm:text-4xl font-semibold'>My Video</h2>
                    {/* <div className='max-w-[90px] h-[0.5px] bg-white mt-4'></div> */}
                </span>
                <div className='grid grid-cols-1 sm:grid-rows-3 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                    <div
                        className='w-full col-span-1 row-span-3 h-auto hover:scale-105 transition-all rounded-lg overflow-hidden'>
                        <video
                            src={'/videos/video3.mp4'}
                            poster={'/videos/video3.mp4'}
                            alt="Thumbnail Image"
                            className='w-full h-full object-cover aspect-auto rounded-lg'
                            controls
                        />
                    </div>
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className='w-full h-auto aspect-video hover:scale-105 transition-all rounded-lg overflow-hidden'>
                            <video
                                src={video.link}
                                poster={video.thumbnail}
                                alt="Thumbnail Image"
                                className='w-full h-full object-cover aspect-video rounded-lg'
                                controls
                            />
                        </div>
                    ))}
                </div>
            </div>
            <ScrollingText />
        </section>
    );
};

export default Projects;