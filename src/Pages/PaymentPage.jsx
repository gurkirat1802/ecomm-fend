import React from "react";
import img from "../images/old.jpg"
import { NavLink } from "react-router-dom";

const PaymentPage = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto">
                <div className="mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Pay here</h1>
                </div>
                <div className="mb-4">
                    <img src={img} alt="Payment" className="w-full max-w-xs rounded-lg" />
                </div>
                <NavLink to="/paymentdone" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Proceed
                </NavLink>
            </div>
        </>
    );
}

export default PaymentPage;