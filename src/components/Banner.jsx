import React from 'react';

export default function Banner() {
    return (
    <section className='h-50 bg-yellow-900 relative'>
    <div className='w-full h-full bg-cover bg-banner opacity-80'></div>
    <div className='absolute w-full top-64 text-center text-gray-50 drop-shadow-2xl'>
        <h2 className='font-bold text-6xl'>SHOP WITH US</h2>
        <p className='text-2xl'>Best Products, High Quality</p>
    </div>
    </section>
    );
}

