import React from 'react';

const ScrollingText = () => {
    return (
        <div className='w-full overflow-hidden whitespace-nowrap relative py-4'>
            <div className='animate-scroll flex flex-row items-center gap-8 text-white text-lg sm:text-xl font-normal'>
                <h4>YouTube</h4>
                <h4>Documentary</h4>
                <h4>Vlogs</h4>
                <h4>Informative</h4>
                <h4>Podcast</h4>
                <h4>YouTube Shorts</h4>
                <h4>Reels</h4>
                {/* Repeat the content for seamless scrolling */}
                <h4>YouTube</h4>
                <h4>Documentary</h4>
                <h4>Vlogs</h4>
                <h4>Informative</h4>
                <h4>Podcast</h4>
                <h4>YouTube Shorts</h4>
                <h4>Reels</h4>
            </div>
        </div>
    );
};

export default ScrollingText;