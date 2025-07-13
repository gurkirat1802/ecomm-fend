import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Cartpage = () => {
    const cartItems = [
        {
            id: 1,
            name: "Katakakhadiradi Kashayam",
            price: 120.00,
            discountPrice: 114.29,
            qty: 2,
        },
        {
            id: 2,
            name: "Oushadhakkanji Churnam",
            price: 140.00,
            discountPrice: 125.00,
            qty: 1,
        },
    ];

    // Calculate subtotal, GST, and total
    const subtotal = cartItems.reduce((acc, item) => acc + (item.discountPrice * item.qty), 0);
    const gst = subtotal * 0.075; // Assuming GST is 7.5%
    const orderTotal = subtotal + gst;

    return (
        <>
            <Navbar/>
            <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg my-16">
                <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
                <div className="mb-4">
                    <h3 className="text-lg font-semibold">Summary</h3>
                    <div className="flex justify-between mt-2">
                        <span>Subtotal:</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>GST:</span>
                        <span>₹{gst.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold mt-2">
                        <span>Order Total:</span>
                        <span>₹{orderTotal.toFixed(2)}</span>
                    </div>
                    <NavLink to="/paymentpage" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-blue-600 w-full flex justify-center items-center">
                        Proceed to Checkout
                    </NavLink>
                </div>

                <h3 className="text-lg font-semibold mb-2">Shopping Cart Items</h3>
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between border-b border-gray-200 pb-2">
                            <div className="flex-1">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-gray-600">Price: ₹{item.price.toFixed(2)}</p>
                                <p className="text-gray-600">Qty: {item.qty}</p>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="font-bold">Subtotal: ₹{(item.discountPrice * item.qty).toFixed(2)}</p>
                                <div className="flex space-x-2 mt-2">
                                    <button className="bg-yellow-500 text-white font-semibold py-1 px-2 rounded hover:bg-yellow-600">Edit</button>
                                    <button className="bg-red-500 text-white font-semibold py-1 px-2 rounded hover:bg-red-600">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-6">
                    <NavLink to="/home" target="_top" className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                        Continue Shopping
                    </NavLink>
                    <NavLink className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded hover:bg-gray-300">
                        Clear Shopping Cart
                    </NavLink>
                    <NavLink className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">
                        Update Shopping Cart
                    </NavLink>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Cartpage;