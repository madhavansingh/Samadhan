import React from "react";
import { motion } from "framer-motion";
import './index.css';

const reports = [
  {
    id: 1,
    title: "Pothole on Main Street",
    description: "Large pothole near the signal, causing traffic issues.",
    status: "Pending",
  },
  {
    id: 2,
    title: "Broken Street Light",
    description: "Street light not working in Sector 4 Park.",
    status: "Resolved",
  },
  {
    id: 3,
    title: "Overflowing Garbage Bin",
    description: "Garbage bin not cleaned for 3 days near Metro station.",
    status: "In Progress",
  },
];

const statusColor = {
  Pending: "bg-yellow-100 text-yellow-800",
  Resolved: "bg-green-100 text-green-800",
  "In Progress": "bg-blue-100 text-blue-800",
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Samadhan</h1>
        <p className="text-gray-600">Your local issue reporting platform</p>
      </motion.div>

      <div className="h-[70vh] overflow-y-auto rounded-md border p-4 bg-white shadow-sm">
        <div className="grid gap-4">
          {reports.map((report) => (
            <div key={report.id} className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-gray-800">
                {report.title}
              </h2>
              <p className="text-gray-600 my-2">{report.description}</p>
              <span
                className={`inline-block text-sm px-2 py-1 rounded-full font-medium ${statusColor[report.status]}`}
              >
                {report.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
