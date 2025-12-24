
import React from 'react';

function SectionStyle({ number, title }) {
    return (
        <div className='flex flex-row items-center p-2 mt-5 flex-wrap py-10'>
            <h2 className='text-7xl font-bold text-gray-900'>{number}</h2>
            <div className='px-5'>
                <div className="w-px h-[70px] bg-black "></div>
            </div>
            <p className='sm:text-2xl text-xl font-bold text-gray-900 max-w-[300px] sm:max-w-[500px] uppercase mt-5'>{title}</p>
        </div>
    );
}
export default SectionStyle;
