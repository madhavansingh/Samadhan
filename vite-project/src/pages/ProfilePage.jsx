import BottomNavigation from "../components/BottomNavigation"

export default function ProfilePage() {
  const user = {
    createdAt: "22 April 2025 at 13:31:46 UTC+5:30",
    email: "hp15spraveen@gmail.com",
    location: { lat: 12.9716, lng: 77.5946 },
    name: "Praveen",
    profileUrl:
      "https://images.pexels.com/photos/110686/pexels-photo-110686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    role: "citizen",
    badges: ["Verified User", "Top Contributor", "Early Adopter"],
  }

  return (
    <div className="main-screen bg-black text-white flex flex-col relative">
      <div className="rounded-3xl shadow-lg w-full p-8">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={user.profileUrl || "/placeholder.svg"}
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

      <div className="bg-white text-black h-full rounded-t-3xl p-6 overflow-y-auto">
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

        {/* Badges */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {user.badges.map((badge, index) => (
            <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
              {badge}
            </span>
          ))}
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
            Role: {user.role}
          </span>
        </div>
      </div>

      <BottomNavigation />
    </div>
  )
}
