'use client';

export default function Services() {
   return (
     <section className="flex lg:flex-row flex-col gap-10 justify-between p-10 pt-32">
        <h2 className="lg:basis-1/2 lg:text-4xl text-2xl font-semibold border-red-700 border-solid pb-5 border-b-2 lg:border-r-2 lg:border-b-0">Our Services</h2>
        <div className="lg:basis-1/2 flex flex-col gap-5 divide-y-2 divide-gray-200">
            <div>
                <h3 className="font-semibold text-xl pb-3">Fundraising and Co-investment for Startups</h3>
                Whether you&apos;re launching a new venture or looking to scale, we offer expert fundraising strategies and co-investment opportunities to fuel your startup&apos;s growth.
            </div>
            <div>
                <h3 className="font-semibold text-xl pb-3 pt-5">Board Membership and Founders Coaching</h3>
            Benefit from seasoned advice and strategic direction with our board membership and personalized coaching for founders, designed to drive your business forward.
            </div>
            <div>
                <h3 className="font-semibold text-xl pb-3 pt-5">Board Membership and Founders Coaching</h3>
            Unlock your business&apos;s potential with our comprehensive diagnostics and tailored strategy workshops, ensuring a clear path to achieving your goals.
            </div>
            <div>
            <h3 className="font-semibold text-xl pb-3 pt-5">Interims and Crisis Management</h3>
            Navigate through challenging times with confidence, utilizing our interim management services and crisis management expertise to stabilize and steer your business effectively.
                        </div>
            <div><h3 className="font-semibold text-xl pb-3 pt-5">Workshops on Mission, Vision, Values</h3>
            Define and refine your organization&apos;s core principles with our workshops, aligning your team around a cohesive mission, vision, and values for long-term success.
                                    </div>
    </div>
     </section>
   )
}