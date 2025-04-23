import BottomNavigation from "../components/BottomNavigation"

export default function TrackPage() {
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
  ]

  const statusColor = {
    Pending: "bg-yellow-100 text-yellow-800",
    "In Progress": "bg-blue-100 text-blue-800",
    Resolved: "bg-green-100 text-green-800",
  }

  return (
    <div className="main-screen bg-black flex flex-col relative">
      <h2 className="text-3xl text-white p-10 font-semibold text-center">Complaint Tracking</h2>

      <div className="complaint-container overflow-y-auto bg-white rounded-t-3xl h-full shadow-lg p-6 pb-20">
        <div className="space-y-4">
          {complaints.map((complaint) => (
            <div key={complaint.id} className="border rounded-lg p-4 shadow-sm hover:shadow-md transition">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{complaint.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor[complaint.status]}`}>
                  {complaint.status}
                </span>
              </div>
              <p className="text-sm text-gray-500">Complaint ID: {complaint.id}</p>
              <p className="text-sm text-gray-500">Submitted On: {complaint.submittedOn}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}
