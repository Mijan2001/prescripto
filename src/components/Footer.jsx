import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/* left section..........  */}
                <div>
                    <img src={assets.logo} alt="" className="mb-5 w-40" />
                    <p className="w-full md:w-2/3 text-gray-600 leading-6">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Vitae, repellat? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Sunt fugiat eum culpa
                        facere autem, enim aspernatur molestiae consequatur ea
                        illo nam qui! Fuga culpa inventore fugiat, a eveniet
                        sint ipsam!
                    </p>
                </div>

                {/* center section.......  */}
                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* right section.......  */}
                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-2 text-gray-600">
                        <li>+8801740017938</li>
                        <li>mijan.cse19@gmail.com</li>
                    </ul>
                </div>
            </div>
            {/* copyright text..........  */}
            <div>
                <hr />
                <p className="py-5 text-sm text-center">
                    Copyright 2024 @Mijanur Rahman - All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
