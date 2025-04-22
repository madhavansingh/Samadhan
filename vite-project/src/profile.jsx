import React from "react";
import "./index.css";

const ProfilePage = () => {
    const user = {
        createdAt: "22 April 2025 at 13:31:46 UTC+5:30",
        email: "hp15spraveen@gmail.com",
        location: { lat: 12.9716, lng: 77.5946 },
        name: "Praveen",
        profileUrl:
            "https://images.pexels.com/photos/110686/pexels-photo-110686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        role: "citizen",
        badges: ["Verified User", "Top Contributor", "Early Adopter"],

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

        <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 bg-black text-white rounded-3xl overflow-hidden flex flex-col relative shadow-lg">

            <div className="rounded-3xl shadow-lg max-w-md w-full p-8">
                {/* Profile Picture */}

                <div className="flex justify-center">
                    <img
                        src={user.profileUrl}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                    />
                </div>

                {/* Name & Role */}
                <div className="text-center mt-4">
                    <h2 className="text-2xl font-semibold">{user.name}</h2>
                    <p className="text-gray-500 capitalize">{user.role}</p>
                </div>
            </div>


            <div className=" bg-white h-full rounded-t-3xl">
                {/* Email & Created At */}
                <div className="mt-6 space-y-3">
                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                        <span className="text-sm text-gray-600 font-medium">Email:</span>
                        <p className="text-gray-800">{user.email}</p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                        <span className="text-sm text-gray-600 font-medium">Created At:</span>
                        <p className="text-gray-800">{user.createdAt}</p>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg shadow-sm">
                        <span className="text-sm text-gray-600 font-medium">Location:</span>
                        <p className="text-gray-800">
                            Latitude: {user.location.lat}, Longitude: {user.location.lng}
                        </p>
                    </div>
                </div>


                {/* Badges (for visual interest, optional) */}
                <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {user.badges[2]}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Role: {user.role}
                    </span>
                </div>
            </div>

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

export default ProfilePage;
