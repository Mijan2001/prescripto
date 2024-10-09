import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div>
            {/* title secton......  */}
            <header>
                <h1 className="text-center text-2xl text-[#967280] font-semibold">
                    ABOUT <span className="text-[#374151]">US</span>
                </h1>
            </header>

            {/* hero section ............  */}

            <div className="pt-8  space-y-10 md:space-y-0 md:grid md:grid-cols-3 gap-10 md:items-center">
                <div className="md:col-span-1 md:h-full items-center">
                    <img
                        src={assets.about_image}
                        alt=""
                        className="h-full items-center"
                    />
                </div>
                <div className="text-sm  md:col-span-2 md:pr-40 text-gray-700  h-full md:flex md:flex-col md:justify-between">
                    <div className="space-y-6 md:space-x-0 ">
                        <p>
                            Welcome to Prescripto, your trusted partner in
                            managing your healthcare needs conveniently and
                            efficiently. At Prescripto, we understand the
                            challenges individuals face when it comes to
                            scheduling doctor appointments and managing their
                            health records.
                        </p>
                        <p>
                            Prescripto is committed to excellence in healthcare
                            technology. We continuously strive to enhance our
                            platform, integrating the latest advancements to
                            improve user experience and deliver superior
                            service. Whether you're booking your first
                            appointment or managing ongoing care, Prescripto is
                            here to support you every step of the way.
                        </p>
                    </div>
                    <div className="space-y-6 pt-6">
                        <h3 className="font-bold text-start">Our Vision</h3>
                        <p>
                            Our vision at Prescripto is to create a seamless
                            healthcare experience for every user. We aim to
                            bridge the gap between patients and healthcare
                            providers, making it easier for you to access the
                            care you need, when you need it.
                        </p>
                    </div>
                </div>
            </div>

            {/* body section..........  */}
            <div className="mt-10">
                <div>
                    <h2 className="font-semibold text-xl">WHY CHOOSE US</h2>
                </div>
                <div className="pt-3 md:flex">
                    <div className="border p-8 md:py-20 md:px-16 space-y-5 group hover:bg-blue-500 hover:text-white hover:duration-200">
                        <h3 className="text-gray-500 font-bold group-hover:text-white">
                            EFFICIENCY:
                        </h3>
                        <p>
                            Streamlined appointment scheduling that fits into
                            your busy lifestyle.
                        </p>
                    </div>
                    <div className="border p-8 md:py-20 md:px-16  space-y-5 group hover:bg-blue-500 hover:text-white hover:duration-200">
                        <h3 className="text-gray-500 font-bold group-hover:text-white">
                            CONVENIENCE:
                        </h3>
                        <p>
                            Access to a network of trusted healthcare
                            professionals in your area.
                        </p>
                    </div>

                    <div className="border p-8 md:py-20 md:px-16  space-y-5 group hover:bg-blue-500 hover:text-white hover:duration-200">
                        <h3 className="text-gray-500 font-bold group-hover:text-white">
                            PERSONALIZATION:
                        </h3>
                        <p>
                            Tailored recommendations and reminders to help you
                            stay on top of your health.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
