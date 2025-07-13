import React from "react";
import img1 from "../images/old.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {NavLink} from "react-router-dom";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "gray", borderRadius: "50%" }}
            onClick={onClick}
        />
    );
};
const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="flex flex-col items-center rounded-md mt-10 p-6">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-700">What are you looking for?</h1>
                </div>
                <div className="flex w-96">
                    <input
                        type="text"
                        id="search"
                        className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-2xl sm:text-sm border-gray-300 border-2 px-2 py-1"
                        placeholder="Search for a medicine"
                    />
                    <button
                        type="submit"
                        className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Search
                    </button>
                </div>
            </div>
            <div className="mt-10 px-5 ml-5">
                <h2 className="text-3xl font-bold">Shop By Category</h2>
            </div>
            <div className="mt-10 ml-20 mx-auto max-w-7xl mr-20">
                <Slider {...settings}>
                    <div className="text-center">
                        <img src={img1} alt="image" className="rounded-lg shadow-lg cursor-pointer h-48 w-48 transition duration-300 ease-in-out transform hover:scale-105 ml-32" />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 ml-12">Must haves</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="rounded-lg shadow-lg cursor-pointer h-48 w-48 transition duration-300 ease-in-out transform hover:scale-105 ml-32" />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 ml-12">Elderly Care</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="rounded-lg shadow-lg cursor-pointer h-48 w-48 transition duration-300 ease-in-out transform hover:scale-105 ml-32" />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 ml-12">Personal Care</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="rounded-lg shadow-lg cursor-pointer h-48 w-48 transition duration-300 ease-in-out transform hover:scale-105 ml-32" />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 ml-12">Skin Care</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="rounded-lg shadow-lg cursor-pointer h-48 w-48 transition duration-300 ease-in-out transform hover:scale-105 ml-32" />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 ml-12">Fitness Supplements</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="rounded-lg shadow-lg cursor-pointer h-48 w-48 transition duration-300 ease-in-out transform hover:scale-105 ml-32" />
                        <h2 className="mt-4 text-xl font-semibold text-gray-800 ml-12">Children</h2>
                    </div>
                </Slider>
            </div>
            <div className="mt-20 px-5 ml-5">
                <h2 className="text-3xl font-bold">New Launches</h2>
                <h2 className="text-xl mt-2">New wellness range just for you!</h2>
            </div>
            <div className="mt-10 ml-20 mx-auto max-w-7xl mr-20">
                <Slider {...settings}>
                    <NavLink to="/medicinedetails" target="_top" className="text-center block">
                        <div className="text-center">
                            <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                            <h2 className="mt-4 font-medium">Medicine 1</h2>
                            <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                            <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                        </div>
                    </NavLink>
                    <NavLink to="/medicinedetails" target="_top" className="text-center block">
                        <div className="text-center">
                            <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                            <h2 className="mt-4 font-medium">Medicine 2</h2>
                            <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                            <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                        </div>
                    </NavLink>
                    <NavLink to="/medicinedetails" target="_top" className="text-center block">
                        <div className="text-center">
                            <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                            <h2 className="mt-4 font-medium">Medicine 3</h2>
                            <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                            <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                        </div>
                    </NavLink>
                    <NavLink to="/medicinedetails" target="_top" className="text-center block">
                        <div className="text-center">
                            <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                            <h2 className="mt-4 font-medium">Medicine 4</h2>
                            <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                            <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                        </div>
                    </NavLink>
                    <NavLink to="/medicinedetails" target="_top" className="text-center block">
                        <div className="text-center">
                            <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                            <h2 className="mt-4 font-medium">Medicine 5</h2>
                            <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                            <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                        </div>
                    </NavLink>
                    <NavLink to="/medicinedetails" target="_top" className="text-center block">
                        <div className="text-center">
                            <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                            <h2 className="mt-4 font-medium">Medicine 6</h2>
                            <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                            <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                        </div>
                    </NavLink>
                    <NavLink to="/medicinedetails" target="_top" className="text-center block">
                        <div className="text-center">
                            <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                            <h2 className="mt-4 font-medium">Medicine 7</h2>
                            <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                            <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                        </div>
                    </NavLink>
                </Slider>
            </div>
            <div className="mt-20 px-5 ml-5">
                <h2 className="text-3xl font-bold">Featured Brands</h2>
                <h2 className="text-xl mt-2">Pick from our favourite brands</h2>
            </div>
            <div className="mt-10 ml-20 mx-auto max-w-7xl mr-20 mb-20">
                <Slider {...settings}>
                    <div className="text-center">
                        <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 ml-24"></img>
                        <h2 className="mt-4 text-xl font-medium">Himalaya</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 ml-24"></img>
                        <h2 className="mt-4 text-xl font-medium">Zandu</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 ml-24"></img>
                        <h2 className="mt-4 text-xl font-medium">Vedic Aura</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 ml-24"></img>
                        <h2 className="mt-4 text-xl font-medium">Soul Veda</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 ml-24"></img>
                        <h2 className="mt-4 text-xl font-medium">Ayur Bliss</h2>
                    </div>
                    <div className="text-center">
                        <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 ml-24"></img>
                        <h2 className="mt-4 text-xl font-medium">AyurSoul</h2>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Home;
