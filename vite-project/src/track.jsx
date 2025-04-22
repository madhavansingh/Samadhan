import React from "react";
import './index.css'

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
const ComplaintTrackingPage = () => {
    const complaints = [
        {
            id: "CMP001",
            title: "Water Leakage in Street",
            status: "Pending",
            submittedOn: "20 April 2025",
        },
        {
            id: "CMP002",
            title: "Garbage not collected",
            status: "In Progress",
            submittedOn: "21 April 2025",
        },
        {
            id: "CMP003",
            title: "Streetlight not working",
            status: "Resolved",
            submittedOn: "19 April 2025",
        },
        {
            id: "CMP004",
            title: "Potholes on Main Road",
            status: "Pending",
            submittedOn: "22 April 2025",
        },
        {
            id: "CMP005",
            title: "Noisy Construction Work",
            status: "In Progress",
            submittedOn: "23 April 2025",
        },
        {
            id: "CMP006",
            title: "Broken Park Bench",
            status: "Resolved",
            submittedOn: "18 April 2025",
        },
        {
            id: "CMP007",
            title: "Overflowing Drainage",
            status: "Pending",
            submittedOn: "24 April 2025",
        },
        {
            id: "CMP008",
            title: "Illegal Parking Issue",
            status: "In Progress",
            submittedOn: "25 April 2025",
        },
    ];

    const statusColor = {
        Pending: "bg-yellow-100 text-yellow-800",
        "In Progress": "bg-blue-100 text-blue-800",
        Resolved: "bg-green-100 text-green-800",
    };

    return (
        <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 bg-black rounded-3xl overflow-hidden flex flex-col relative shadow-lg">
            <h2 className="text-3xl text-white p-10 font-semibold text-center">Complaint Tracking</h2>

            <div className="complaint-container overflow-y-auto bg-white rounded-t-3xl h-full shadow-lg p-6">

                <div className="space-y-4">
                    {complaints.map((complaint) => (
                        <div
                            key={complaint.id}
                            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                        >
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold">{complaint.title}</h3>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[complaint.status]}`}
                                >
                                    {complaint.status}
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">Complaint ID: {complaint.id}</p>
                            <p className="text-sm text-gray-500">Submitted On: {complaint.submittedOn}</p>
                        </div>
                    ))}
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

export default ComplaintTrackingPage;
