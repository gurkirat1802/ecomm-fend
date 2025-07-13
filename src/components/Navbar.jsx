import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (<>
        <nav className="bg-white p-3 border-b border-gray-300 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-lg font-bold h-8 w-60">
                    <a className="text-black hover:text-gray-700 cursor-pointer">Name of shop</a>
                </div>
                <div className="flex space-x-8 justify-center w-full">
                    <NavLink
                        to="/home"
                        className="text-black hover:text-gray-700 cursor-pointer"
                        activeClassName="font-bold"
                        exact
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/aboutus"
                        className="text-black hover:text-gray-700 cursor-pointer"
                        activeClassName="font-bold"
                    >
                        About Us
                    </NavLink>
                    <NavLink
                        to="/medicine"
                        className="text-black hover:text-gray-700 cursor-pointer"
                        activeClassName="font-bold"
                    >
                        Medicine
                    </NavLink>
                    <NavLink
                        to="/offers"
                        className="text-black hover:text-gray-700 cursor-pointer"
                        activeClassName="font-bold"
                    >
                        Offers
                    </NavLink>
                    <NavLink
                        to="/contactus"
                        className="text-black hover:text-gray-700 cursor-pointer"
                        activeClassName="font-bold"
                    >
                        Contact Us
                    </NavLink>
                    <NavLink
                        to="/cart"
                        className="text-black hover:text-gray-700 cursor-pointer"
                        activeClassName="font-bold"
                    >
                        Cart
                    </NavLink>
                </div>
                <div className="text-black text-lg font-bold h-8 w-60">
                    <Link
                        to="/loginadmin"
                        className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Admin
                    </Link>
                    <Link
                        to="/signup"
                        className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        User
                    </Link>
                </div>
            </div>
        </nav>
    </>
    );
}

export default Navbar;