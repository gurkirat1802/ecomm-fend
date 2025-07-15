import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import img from "../images/med1.jpg";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Medicinedet = () => {
    const handleAddToCart = () => {
        toast.success("Added to cart", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src={img} alt="Katakakhadiradi Kashayam" className="rounded-lg shadow-md max-w-xs" />
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 max-w-lg w-full">
                    <h2 className="text-2xl font-semibold text-green-700 mb-2">Katakakhadiradi Kashayam</h2>
                    <p className="text-xl font-bold text-gray-900 mb-1">₹120.00</p>
                    <p className="text-green-600 mb-3">In stock SKU: FGK003</p>
                    <p className="text-sm text-gray-700 mb-3">200 ml Pet Bottle</p>
                    <div className="flex items-center mb-4">
                        <label htmlFor="quantity" className="mr-2 font-medium">Qty</label>
                        <input
                            type="number"
                            id="quantity"
                            defaultValue="1"
                            min="1"
                            className="border border-gray-300 rounded px-2 py-1 w-16 text-center focus:outline-none focus:border-blue-500"
                        />
                    </div>
                    <button 
                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 w-full mb-3"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                    <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300 w-full">
                        Add to Wish List
                    </button>
                    <div className="mt-6">
                        <h3 className="font-semibold text-lg text-gray-800 mb-2">Additional Description</h3>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Usage:</strong> Add 3 times of lukewarm water each time to the kashayam and take twice daily before food on an empty stomach.
                        </p>
                        <p className="text-sm text-gray-700 mb-2">
                            <strong>Dosage:</strong> 10 to 15 ml for adults and 5 to 10 ml for children or as directed by the Physician.
                        </p>
                        <p className="text-sm text-gray-700">
                            <strong>Indication:</strong> Diabetes mellitus
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
};

export default Medicinedet;