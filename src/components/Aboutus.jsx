import React from "react";
import img from "../images/aboutdesc.jpg";

const Aboutus = () => {
    return (
        <>
            <div className="relative h-screen w-full">
                <div className="absolute inset-0 bg-[url('./images/aboutimg.jpg')] bg-contain bg-center h-3/4">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                </div>
                <h1 className="absolute font-bold text-6xl top-96 left-60 transform -translate-x-1/2 tracking-wider z-20 text-[#F5F5DC]">
                    ABOUT US
                </h1>
            </div>
            <div className="flex ml-24 mr-10 mb-20 relative z-20">
                <img src={img} alt="about" className="w-full md:w-1/2 rounded-lg shadow-lg" />
                <div className="absolute max-w-2xl w-1/2 bg-white shadow-lg rounded-lg overflow-hidden mt-8 border-2 border-seagreen top-44 left-2/3 transform -translate-x-1/2 -translate-y-1/2 min-h-[450px]">
                    <div className="p-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 text-center md:text-left">
                            <span className="block md:inline">Welcome to</span>
                            <br />
                            COMPANY NAME
                        </h1>
                        <h2 className="text-xl md:text-2xl font-semibold text-green-700 mb-4 mt-5 text-center md:text-left">
                            Nurturing Health, Naturally and Holistically
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            At [Your Ayurvedic Brand Name], we are dedicated to promoting wellness through the timeless principles of Ayurveda. With a commitment to purity and sustainability, we carefully craft our remedies to restore balance and vitality to the mind, body, and spirit. Our passion for holistic health drives us to create products that are both rooted in ancient wisdom and aligned with the needs of modern living, bringing nature’s healing power to you in every product we offer.
                        </p>
                    </div>
                </div>
            </div>
            <section className="bg-green-50 py-16 px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-green-800 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-700">
                        At [Your Ayurvedic Brand Name], our mission is to bring ancient Ayurvedic wisdom to the modern world by
                        providing natural, holistic, and high-quality products. We believe in the power of nature to heal, nurture,
                        and revitalize the body, mind, and soul. Our goal is to inspire healthier living by combining traditional
                        Ayurvedic knowledge with innovative practices, helping everyone to achieve a balanced and harmonious lifestyle.
                    </p>
                </div>
            </section>
        </>
    );
}

export default Aboutus;