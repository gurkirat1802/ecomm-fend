import React from "react";
import img1 from "../images/old.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
import carousel1 from "../images/carousel-1.jpg";
import carousel2 from "../images/carousel-2.jpg";

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
    const fullScreenSettings = {
        speed: 1000,
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
    };

    const carouselImages = [carousel1, carousel2];

    const cardSliderSettings = {
        dots: false,
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
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>
            <div className="overflow-x-hidden">
                {/* <div className="flex flex-col items-center rounded-md mt-10 p-6">
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
                </div> */}

                <div className="relative w-screen overflow-hidden">
                    <Slider {...fullScreenSettings}>
                        {carouselImages.map((img, idx) => (
                            <div key={idx}>
                                <img
                                    src={img}
                                    alt={`slide-${idx}`}
                                    className="w-full h-3/4 object-cover"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="bg-green-800 text-white px-6 py-8 text-center shadow-md -mt-2">
                    <h3 className="text-3xl font-semibold mb-4">
                        Buy Ayurvedic Medicine Online from India's Largest Ayurvedic Shopping Store
                    </h3>
                    <p className="mb-2">
                        Ayurkart, the online ayurvedic store, sells all kinds of ayurvedic medicine and ayurvedic products online from India's top ayurvedic brands like Kottakkal Arya Vaidya Sala, Vaidyaratnam, AVP, Kerala Ayurveda, Himalaya, Dabur, Zandu Ayurveda & Alarsin, etc.
                    </p>
                    <p>
                        Our aim is to bring the world of authentic ayurvedic herbs and medicines to your doorstep within the shortest delivery time possible.
                    </p>
                </div>

                {/* <div className="mt-10 px-5 ml-5">
                    <h2 className="text-3xl font-bold">Shop By Category</h2>
                </div>
                <div className="mt-10 ml-20 mx-auto max-w-7xl mr-20">
                    <Slider {...cardSliderSettings}>
                        {["Must haves", "Elderly Care", "Personal Care", "Skin Care", "Fitness Supplements", "Children"].map((title, idx) => (
                            <div className="text-center" key={idx}>
                                <img src={img1} alt="image" className="rounded-lg shadow-lg cursor-pointer h-48 w-48 transition duration-300 transform hover:scale-105 ml-32" />
                                <h2 className="mt-4 text-xl font-semibold text-gray-800 ml-12">{title}</h2>
                            </div>
                        ))}
                    </Slider>
                </div> */}

                <div className="mt-20 px-5 ml-5 text-center">
                    <h2 className="text-3xl font-bold">Our Top Selling Ayurvedic Medicines</h2>
                    <h2 className="text-lg mt-2">New wellness range just for you!</h2>
                </div>
                <div className="mt-10 ml-20 mx-auto max-w-7xl mr-20">
                    <Slider {...cardSliderSettings}>
                        {[...Array(6)].map((_, i) => (
                            <NavLink to="/medicinedetails" target="_top" className="text-center block" key={i}>
                                <img src={img1} alt="image" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 mx-auto" />
                                <h2 className="mt-4 font-medium">Medicine {i + 1}</h2>
                                <h2 className="text-gray-400">MRP. <span className="line-through">Rs:728.00</span></h2>
                                <h2 className="font-medium">Rs:389.00 <span className="text-red-700">(30%)</span></h2>
                            </NavLink>
                        ))}
                    </Slider>
                </div>
                <div className="mt-20 px-5 ml-5 text-center">
                    <h2 className="text-3xl font-bold">Our Top Ayurvedic Medicines Brand</h2>
                    <h2 className="text-lg mt-2">Pick from our favourite brands</h2>
                </div>
                <div className="mt-10 ml-20 mx-auto max-w-7xl mr-20 mb-20">
                    <Slider {...cardSliderSettings}>
                        {["Himalaya", "Zandu", "Vedic Aura", "Soul Veda", "Ayur Bliss", "AyurSoul"].map((brand, idx) => (
                            <div className="text-center" key={idx}>
                                <img src={img1} alt="brand" className="max-w-xs rounded-lg shadow-md cursor-pointer h-48 w-48 ml-24" />
                                <h2 className="mt-4 text-xl font-medium">{brand}</h2>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Home;
