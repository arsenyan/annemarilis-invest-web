'use client';

import Image from "next/image";

export default function Why() {
   return (
      <section className="pt-32">
      <div className="flex lg:flex-row lg:gap-20 flex-col gap-10">
        <Image 
               className="object-cover object-top w-full h-64 lg:h-1/2 lg:w-1/2 rounded drop-shadow-2xl"
               src={'/Economic_Security_Conference.jpg'}
               width={600}
               height={600} alt={""}      />
        <div className="flex flex-col gap-2 text-xl">
        <h2 className="lg:text-4xl text-2xl font-semibold pb-10">Why Choose Us?</h2>
        <p>
        Annemarillis Invest stands out through its deep industry knowledge, hands-on experience, and a commitment to fostering innovation and resilience in businesses. We understand the unique challenges and opportunities that come with managing and growing a business in today&apos;s dynamic environment.       </p>
        <p>
        Partner with Annemarillis Invest and let us help you navigate the complexities of the business world with confidence and strategic insight.
        </p>
        </div>
      </div>

      </section>
   )
}