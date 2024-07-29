'use client';

import Image from 'next/image';
export default function Hero() {
   return (
      <main className="flex flex-col gap-10 pt-10 lg:pt-32 lg:flex-row lg:justify-between border-b-2 border-gray-200 pb-20">
         <div className="flex flex-col gap-8 max-w-2xl lg:justify-between">
            <h1 className="lg:text-6xl md:text-6xl text-5xl font-semibold text-red-700">Welcome to Annemarillis Invest</h1>
            <div className="flex flex-col gap-4">
                <p className="text-xl">
                At&nbsp;Annemarillis Invest, we&nbsp;leverage over 25&nbsp;years of&nbsp;experience in&nbsp;Management Consulting, Investment Strategy, M&amp;A, Corporate Finance, and (Social) Entrepreneurship to&nbsp;provide family office services.
                </p>
                <p className="text-xl">
                Founded by&nbsp;Daniel Ahmad Krutzinna, Annemarillis Invest is&nbsp;dedicated to&nbsp;guiding businesses and startups towards sustainable success and growth.
                </p>
            </div>
        </div>

         <Image 
            className="object-cover object-top w-full h-64 lg:h-1/2 lg:w-1/2 rotate-2 rounded drop-shadow-2xl"
            src={'/Belarus.png'} 
            alt="Picture of the author" 
            width={500} 
            height={500} 
            priority 
         />
        
      </main>
   )
}