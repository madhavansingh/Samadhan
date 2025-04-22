import React, { useState } from "react";
import "./index.css";

const VerificationPage = () => {
  const [code, setCode] = useState(new Array(6).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) return;
    const newCode = [...code];
    newCode[index] = value[0];
    setCode(newCode);
    if (index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleLogin = () => {
    const enteredCode = code.join("");
    alert(`Verifying code: ${enteredCode}`);
  };

  return (
    <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 rounded-3xl overflow-hidden flex flex-col justify-center items-center relative shadow-lg p-6">
      <h2 className="text-3xl font-semibold mb-2">Verification Code</h2>
      <p className="text-m text-gray-600 mb-5 text-center">
        Search for your friends on the app and connect with them. You can also
        invite your friends who are not on the app yet to join you.
      </p>

      <div className="flex justify-between gap-2 mb-4">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            className="w-10 h-10 text-lg text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        ))}
      </div>

      <p className="text-xs text-gray-500 mb-6">
        Didn’t receive code?{" "}
        <span className="text-red-500 cursor-pointer hover:underline">
          Resend Code
        </span>
      </p>

      <button
        onClick={handleLogin}
        className="w-full py-3 cursor-pointer bg-red-500 text-white text-base rounded-lg hover:bg-red-600 transition-colors"
      >
        Login
      </button>
    </div>
  );
};

export default VerificationPage;
