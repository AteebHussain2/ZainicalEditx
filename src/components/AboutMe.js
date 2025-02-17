import React from 'react';

const AboutMe = () => {
    return (
        <section id="about" className='min-h-screen flex flex-col items-center justify-center py-16 px-4 sm:px-8 md:px-16 lg:px-24 relative'>
            <div className='absolute inset-0 bg-cover bg-center bg-no-repeat z-0' style={{ backgroundImage: "url('/video-editing.jpg')" }}></div>
            <div className='relative z-20 max-w-4xl w-full flex flex-col items-center space-y-10 text-center'>
                <span>
                    <h2 className='text-white text-4xl sm:text-5xl font-bold'>About Me</h2>
                    <div className='max-w-[90px] h-[1px] bg-white mt-6'></div>
                </span>
                <p className='text-white opacity-90 text-lg font-light max-w-3xl'>
                    Unlock the full potential of your visuals! As a seasoned video editor, I craft stunning, attention-grabbing content that elevates your brand and leaves a lasting impression. From YouTube showstoppers to social media teasers and custom thumbnails that pop, my expertise ensures your message is conveyed with clarity, creativity, and polish. Let's collaborate and bring your vision to life in breathtaking style!
                </p>
            </div>

            <div className='relative z-20 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 mt-16'>
                <div className='flex flex-col items-start space-y-5 p-6 bg-opacity-10 border border-white border-opacity-10 backdrop-blur-md bg-black rounded-lg shadow-lg'>
                    <span>
                        <h2 className='text-white text-3xl font-semibold'>My Vision</h2>
                    </span>
                    <p className='text-white text-lg font-light'>
                        My vision is to push creative boundaries and deliver high-quality, eye-catching visuals that leave a lasting impact. I aim to help creators, brands, and businesses enhance their content with professional editing. With continuous learning and innovation, I strive to become one of the best in the industry, turning ideas into visually stunning masterpieces.
                    </p>
                </div>

                <div className='flex flex-col items-start space-y-5 p-6 bg-opacity-10 border border-white border-opacity-10 backdrop-blur-md bg-black rounded-lg shadow-lg'>
                    <span>
                        <h2 className='text-white text-3xl font-semibold'>My Mission</h2>
                    </span>
                    <p className='text-white text-lg font-light'>
                        My mission is to provide top-notch video and thumbnail editing services that captivate audiences and enhance content quality. I am committed to delivering visually appealing and engaging edits that help creators and brands stand out. With dedication, creativity, and continuous improvement, I strive to turn ideas into compelling visuals that leave a lasting impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;