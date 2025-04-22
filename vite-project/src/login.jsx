import React, { useState } from "react";
import "./index.css";

export default function LoginPage() {
    const [phone, setPhone] = useState("");

    return (
        
        <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 rounded-3xl overflow-hidden flex flex-col justify-center items-center relative shadow-lg">

            <header className="text-center bg-black">
                <img
                    src="https://media.istockphoto.com/id/1158795969/photo/laptop-tablet-and-phone-set-mockup-isolated-on-white-3d-render.jpg?s=612x612&w=0&k=20&c=1kSAka5gKjiwDuZMg29X6y5Vd4dlUoTQWkqSdrjhT9s="
                    alt="Laptop"
                    className="mx-auto w-45 h-34"
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

                    <button className="w-full bg-red-500 cursor-pointer text-white py-3 rounded-lg font-medium hover:bg-red-600 transition">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
