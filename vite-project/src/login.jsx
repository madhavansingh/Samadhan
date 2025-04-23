import React, { useState, useEffect } from "react";
import "./index.css";

export default function LoginPage() {
    const [phone, setPhone] = useState("");
    const [showLogin, setShowLogin] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogin(true);
        },3500); // 5 seconds animation

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 rounded-3xl overflow-hidden flex flex-col justify-center items-center relative shadow-lg bg-white">
            {!showLogin ? (
                // Video animation section
                <div className="w-full h-full">
                    <video
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/src/Ani 1 [910D374].mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            ) : (
                // Login screen
                <>
                    <header className="text-center bg-black">
                        <img
                            src="https://media.istockphoto.com/id/1158795969/photo/laptop-tablet-and-phone-set-mockup-isolated-on-white-3d-render.jpg?s=612x612&w=0&k=20&c=1kSAka5gKjiwDuZMg29X6y5Vd4dlUoTQWkqSdrjhT9s="
                            className="mx-auto w-45 h-34"
                            alt="Login Visual"
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
                                <div className="flex items-center border rounded-lg overflow-hidden transition-all duration-300 hover:border-red-500 focus-within:border-red-500 focus-within:ring-2 focus-within:ring-red-200">
                                    <span className="px-4 text-gray-700 border-r border-gray-300">+91</span>
                                    <input
                                        type="tel"
                                        placeholder="Enter your phone number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        pattern="[0-9]{10}"
                                        minLength={10}
                                        maxLength={10}
                                        className="w-full px-4 py-3 focus:outline-none transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <button 
                                className="w-full bg-red-500 text-white py-3 rounded-lg font-medium 
                                         hover:bg-red-600 hover:scale-105 active:scale-95 
                                         transition-all duration-300 transform shadow-lg 
                                         hover:shadow-xl"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </>
            )}
        </div>
    );
}
