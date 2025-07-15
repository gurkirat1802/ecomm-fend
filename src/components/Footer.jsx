import React from "react";
import img2 from "../images/instaicon.png";

const Footer = () => {
    return (
        <>
            <div className="bg-slate-300">
                <div className="flex space-x-48 px-20">
                    <div>
                        <div className="py-5">
                            <h2 className="font-semibold text-lg">Company</h2>
                            <h2 className="cursor-pointer mt-1">About Us</h2>
                            <h2 className="cursor-pointer mt-1">Career</h2>
                            <h2 className="cursor-pointer mt-1">Blog</h2>
                            <h2 className="cursor-pointer mt-1">Partnership with us</h2>
                        </div>
                        <div className="py-5">
                            <h2 className="font-semibold text-lg">Our Services</h2>
                            <h2 className="cursor-pointer mt-1">Medicine</h2>
                            <h2 className="cursor-pointer mt-1">HealthCare Products</h2>
                            <h2 className="cursor-pointer mt-1">Lab Tests</h2>
                            <h2 className="cursor-pointer mt-1">more...</h2>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <h2 className="font-semibold text-lg">Featured Categories</h2>
                            <h2 className="cursor-pointer mt-1">About Us</h2>
                            <h2 className="cursor-pointer mt-1">Career</h2>
                            <h2 className="cursor-pointer mt-1">Blog</h2>
                            <h2 className="cursor-pointer mt-1">Partnership with us</h2>
                            <h2 className="cursor-pointer mt-1">Medicine</h2>
                            <h2 className="cursor-pointer mt-1">HealthCare Products</h2>
                            <h2 className="cursor-pointer mt-1">Lab Tests</h2>
                            <h2 className="cursor-pointer mt-1">more...</h2>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <h2 className="font-semibold text-lg">Need Help</h2>
                            <h2 className="cursor-pointer mt-1">Home</h2>
                            <h2 className="cursor-pointer mt-1">About Us</h2>
                            <h2 className="cursor-pointer mt-1">Offers</h2>
                            <h2 className="cursor-pointer mt-1">Browse Medicine</h2>
                            <h2 className="cursor-pointer mt-1">FAQs</h2>
                            <h2 className="cursor-pointer mt-1">Contact Us</h2>
                        </div>
                    </div>
                    <div>
                        <div className="py-5">
                            <h2 className="font-semibold text-lg">Follow Us On</h2>
                            <div className="flex space-x-6">
                                <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                                <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                                <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                                <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-20 flex">
                    <div className="py-5">
                        <h2 className="font-semibold text-lg">Our Payment Partners</h2>
                        <div className="flex space-x-6">
                            <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                            <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                            <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                            <img src={img2} alt="icon" className="h-7 w-7 mt-2 cursor-pointer" />
                        </div>
                    </div>
                    <div className="py-5 mt-7 ml-96">
                        <h2>All rights reserved 2024</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;