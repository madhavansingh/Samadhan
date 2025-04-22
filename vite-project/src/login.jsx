import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import './index.css';

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("login");
const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md rounded-3xl p-6 shadow-lg">
        <div className="flex justify-center mb-4">
          <img src="https://png.pngtree.com/png-vector/20191026/ourmid/pngtree-laptop-icon-png-image_1871608.jpg" alt="Laptop" className="w-16 h-16" />
        </div>

        <h2 className="text-2xl font-semibold text-center mb-1">Stay engaged</h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          The best way to get the most out of our app is to participate actively.
        </p>

        <div className="flex justify-around border-b mb-6">
          <button
            className={`pb-2 ${activeTab === "login"}`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          
        </div>

        <form className="space-y-4">
          <div>
            <label className="text-sm text-gray-600">Enter Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]{10}"
              maxLength={10}
              className="w-full mt-1 px-4 py-2 border rounded-md text-sm"
            />
          </div>
          <button className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600 transition">
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button className="w-full flex items-center justify-center gap-3 border px-4 py-2 rounded-md mb-3 hover:bg-gray-50 transition">
          <FcGoogle size={20} />
          Continue With Google
        </button>

        <button className="w-full flex items-center justify-center gap-3 border px-4 py-2 rounded-md hover:bg-gray-50 transition">
          <FaFacebook size={20} color="#1877F2" />
          Continue With Facebook
        </button>
      </div>
    </div>
  );
}
