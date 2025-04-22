import React from "react";
import "./index.css";

const ReportComplaintPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Complaint submitted successfully!");
    };

    const HomeIcon = () => (
        <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      );
      
      const AddPostIcon = () => (
        <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
      );
      
      const ActivityIcon = () => (
        <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
      );
      
      const AccountIcon = () => (
        <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      );

    return (
        <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 bg-black rounded-3xl overflow-hidden flex flex-col relative shadow-lg">
            
            <h2 className="text-3xl font-bold p-12 text-center text-white">Report a Complaint</h2>

            <form
                onSubmit={handleSubmit}
                className=" flex flex-col p-5 relative rounded-t-3xl bg-white h-full"
            >
                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Image</label>
                    <div className="mt-1 flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-blue-500 hover:bg-gray-50">
                        <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            id="file-upload"
                        />
                        <label
                            htmlFor="file-upload"
                            className="flex flex-col items-center justify-center text-gray-500 cursor-pointer"
                        >
                            <svg width="45" height="45" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d=" M 600 175C 610 175 619 181 623 191C 623 191 650 275 650 275C 655 285 660 299 675 300C 675 300 825 300 825 300C 850 300 875 325 875 350C 875 350 875 750 875 750C 875 775 850 800 825 800C 825 800 175 800 175 800C 150 800 125 775 125 750C 125 750 125 350 125 350C 125 325 150 300 175 300C 175 300 325 300 325 300C 337 300 346 286 350 275C 350 275 377 191 377 191C 381 181 390 175 400 175C 400 175 600 175 600 175M 312 525C 312 628 397 713 500 713C 603 713 688 628 688 525C 688 422 603 337 500 337C 397 337 312 422 312 525C 312 525 312 525 312 525M 613 525C 613 588 563 638 500 638C 437 638 387 588 387 525C 387 462 437 412 500 412C 563 412 613 462 613 525C 613 525 613 525 613 525"/></svg>

                            <span className="text-sm">Click to upload or drag and drop</span>
                        </label>
                    </div>
                </div>

                <div> 
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Issue Title</label>
                    <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        rows={4}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    ></textarea>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Location</label>
                    <input
                        type="text"
                        placeholder="e.g. MG Road, Bangalore"
                        className="mt-1 mb-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
                >
                    Submit Complaint
                </button>
            </form>
            <nav className="bg-black rounded-xl py-2.5 flex justify-around items-center shadow-lg">
                <button className="cursor-pointer nav-item active text-gray-300 hover:text-gray-400 flex flex-col items-center">
                    <HomeIcon className="text-xl" />
                    <span className="text-xs">Home</span>
                </button>
                <button className="cursor-pointer nav-item text-gray-300 hover:text-gray-400 flex flex-col items-center">
                    <AddPostIcon className="text-xl " />
                    <span className="text-xs">Complaint</span>
                </button>
                <button className="cursor-pointer nav-item text-gray-300 hover:text-gray-400 flex flex-col items-center">
                    <ActivityIcon className="text-xl" />
                    <span className="text-xs">Track</span>
                </button>
                <button className="cursor-pointer nav-item text-gray-300 hover:text-gray-400 flex flex-col items-center">
                    <AccountIcon className="text-xl" />
                    <span className="text-xs">Profile</span>
                </button>
            </nav>
        </div>
    );
};

export default ReportComplaintPage;
