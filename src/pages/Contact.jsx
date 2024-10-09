import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
    return (
        <div>
            {/* title secton......  */}
            <header>
                <h1 className="text-center text-2xl text-[#967280] font-semibold">
                    CONTACT <span className="text-[#374151]">US</span>
                </h1>
            </header>

            {/* hero section ............  */}

            <div className="md:px-32 py-10 md:h-full space-y-10 md:space-y-0 md:grid md:grid-cols-2 gap-10 md:items-center">
                <div className="md:col-span-1 items-center">
                    <img
                        src={assets.contact_image}
                        alt=""
                        className="items-center "
                    />
                </div>
                <div className="text-sm  md:col-span-1  text-gray-700   md:flex md:flex-col md:justify-center">
                    <div className="space-y-6 md:space-x-0 ">
                        <h3 className="text-xl font-bold">OUR OFFICE</h3>
                        <div>
                            <p>00000 Willms Station Suite 000, </p>
                            <p>Washington, USA</p>
                        </div>
                        <div>
                            <p>Tel: (000) 000-0000 Email:</p>
                            <p>greatstackdev@gmail.com</p>
                        </div>
                    </div>
                    <div className="space-y-6 pt-6">
                        <h3 className="text-xl font-bold">
                            CAREERS AT PRESCRIPTO
                        </h3>
                        <p>Learn more about our teams and job openings.</p>
                        <button className="border-[1px] border-black py-5 px-10 hover:bg-black hover:text-white hover:duration-300">
                            Explore Jobs
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
