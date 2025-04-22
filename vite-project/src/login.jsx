import React, { useState } from "react";
import "./index.css";

export default function LoginPage() {
    const [phone, setPhone] = useState("");

    return (
        
        <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 rounded-3xl overflow-hidden flex flex-col justify-center items-center relative shadow-lg">

            <header className="text-center bg-black">
                <img
                    src="https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg"
                    alt="Laptop"
                    className="mx-auto w-24 h-24"
                />
                </header>
                <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-gray-800 mt-4">Stay Engaged</h1>
                <p className="text-gray-600 mt-2">
                    The best way to get the most out of our app is to participate actively.
                </p>
                </div>

            <div className="w-full max-w-lg px-8">
                <form className="space-y-6">
                    <div>
                        <label className="block text-gray-700 mb-1">Phone Number</label>
                        <div className="flex items-center border rounded-lg overflow-hidden">
                            <span className="px-4 text-gray-700 border-r border-gray-300">+91</span>
                            <input
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                pattern="[0-9]{10}"
                                minLength={10}
                                maxLength={10}
                                className="w-full px-4 py-3 focus:outline-black"
                            />
                        </div>
                    </div>

                    <button className="w-full bg-red-500 text-white py-3 rounded-lg font-medium hover:bg-red-600 transition">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
