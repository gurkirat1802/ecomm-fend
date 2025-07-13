import React from 'react';
import { NavLink, Link } from "react-router-dom";
import img1 from "../images/logo.png";

const Navbar = () => {
    return (<>
        <nav className="bg-white p-3 border-b border-gray-300 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="">
                    <img className="p-2" src={img1} alt="logo" />
                </div>
                <div className="flex space-x-8 justify-center w-full">
                    <NavLink
                        to="/home"
                        className="hover:text-gray-700 cursor-pointer text-green-800 font-bold"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className="hover:text-gray-700 cursor-pointer text-green-800 font-bold"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/medicine"
                        className="hover:text-gray-700 cursor-pointer text-green-800 font-bold"
                    >
                        Medicine
                    </NavLink>
                    <NavLink
                        to="/offers"
                        className="hover:text-gray-700 cursor-pointer text-green-800 font-bold"
                    >
                        Offers
                    </NavLink>
                    <NavLink
                        to="/contactus"
                        className="hover:text-gray-700 cursor-pointer text-green-800 font-bold"
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className="hover:text-gray-700 cursor-pointer text-green-800 font-bold"
                    >
                        Cart
                    </NavLink>
                </div>
                {/* <div className="text-lg font-bold h-8 w-60">
                    <Link
                        to="/loginadmin"
                        className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Sign Up
                    </Link>
                    <Link
                        to="/signup"
                        className="ml-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                        Sign In
                    </Link>
                </div> */}
            </div>
        </nav>
    </>
    );
}

export default Navbar;