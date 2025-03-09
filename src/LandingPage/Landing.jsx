import React from 'react';
import BootstrapCarousel from './Carousel';
import { Link, NavLink } from "react-router-dom";

const Landing = () => {
    return (
        <>
            <div className="mb-12">
                <BootstrapCarousel />
            </div>

            <div className="relative flex flex-col items-center justify-center w-4/5 h-36 mx-auto border-2 border-black rounded-lg bg-gradient-to-r from-orange-400 to-red-500 text-white text-center shadow-lg mb-8">
                <h2 className="text-2xl font-semibold">
                    Welcome To <span className="font-bold text-yellow-600">ShareSquare</span>
                </h2>
                <h1 className="text-xl font-semibold mt-2">
                    <span className="font-bold text-yellow-600">Borrow</span> what you need, <span className="font-bold text-yellow-600">lend</span> what you don't
                </h1>
            </div>

            <div className="text-center font-semibold mb-16">
                <h2 className="text-2xl">What we Offer?</h2>
                <div className="flex justify-center mt-8 gap-8">
                    <div className="flex flex-col items-center p-6 transition-transform transform bg-gray-100 border border-gray-300 rounded-lg shadow hover:scale-105 hover:shadow-lg">
                        <img src="/assets/customer-service_5677951.png" alt="Customer Service" className="w-20 h-20 mb-4"/>
                        <div>24*7 Customer Support</div>
                        <p className="text-sm text-gray-600 mt-2">We are just one call away</p>
                    </div>
                    <div className="flex flex-col items-center p-6 transition-transform transform bg-gray-100 border border-gray-300 rounded-lg shadow hover:scale-105 hover:shadow-lg">
                        <img src="/assets/handshake.png" alt="Trusted Buyers/Sellers" className="w-20 h-20 mb-4"/>
                        <div>Trusted Buyers/Sellers</div>
                        <p className="text-sm text-gray-600 mt-2">Ensured safety of your experience</p>
                    </div>
                    <div className="flex flex-col items-center p-6 transition-transform transform bg-gray-100 border border-gray-300 rounded-lg shadow hover:scale-105 hover:shadow-lg">
                        <img src="/assets/accept.png" alt="One click Booking" className="w-20 h-20 mb-4"/>
                        <div>One Click Booking</div>
                        <p className="text-sm text-gray-600 mt-2">Time-saving bookings</p>
                    </div>
                </div>
            </div>

            <div className="text-center font-semibold mb-16">
                <h2 className="text-2xl">Find by Categories</h2>
                <div className="flex justify-around mt-8 flex-wrap gap-8">
                    <NavLink to="/furniture" className="flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:scale-105 transition-transform">
                        <img src="/assets/sofa1.png" alt="Furniture" className="w-20 h-20 mb-2"/>
                        <h4 className="text-lg font-semibold">Furniture</h4>
                    </NavLink>
                    <NavLink to="/appliances" className="flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:scale-105 transition-transform">
                        <img src="/assets/television1.png" alt="Appliances" className="w-20 h-20 mb-2"/>
                        <h4 className="text-lg font-semibold">Appliances</h4>
                    </NavLink>
                    <NavLink to="/electronics" className="flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:scale-105 transition-transform">
                        <img src="/assets/laptop-computer.png" alt="Electronics" className="w-20 h-20 mb-2"/>
                        <h4 className="text-lg font-semibold">Electronics</h4>
                    </NavLink>
                    <NavLink to="/fitness" className="flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:scale-105 transition-transform">
                        <img src="/assets/dumbell.png" alt="Fitness" className="w-20 h-20 mb-2"/>
                        <h4 className="text-lg font-semibold">Fitness</h4>
                    </NavLink>
                    <NavLink to="/bicycle" className="flex flex-col items-center text-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow hover:scale-105 transition-transform">
                        <img src="/assets/bicycle1.png" alt="Bicycle" className="w-20 h-20 mb-2"/>
                        <h4 className="text-lg font-semibold">Bicycle</h4>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Landing;
