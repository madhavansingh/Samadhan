import { useState, useEffect } from "react"
import BottomNavigation from "../components/BottomNavigation"

// Placeholder icon for images
const ImageIcon = () => (
  <svg
    className="text-gray-400"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
)

// Reusable feed card
const FeedItem = ({ userName, location, timeAgo, text, imageUrl, profileUrl }) => (
  <div className="feed-item mb-6 pb-4 border-b border-gray-200 animate-fadeIn">
    {/* Header */}
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 mr-3 flex justify-center items-center">
        {profileUrl ? (
          <img
            src={profileUrl}
            alt={userName}
            className="w-full h-full object-cover"
          />
        ) : (
          <ImageIcon />
        )}
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-base">{userName}</span>
        <span className="text-sm text-gray-500">{location}</span>
      </div>
      <span className="ml-auto text-xs text-gray-400">{timeAgo}</span>
    </div>

    {/* Feed Image */}
    {imageUrl && (
      <div className="my-3 rounded-xl overflow-hidden">
        <img
          src={imageUrl}
          alt="Feed content"
          className="w-full h-48 object-cover"
          onError={(e) => (e.target.style.display = "none")}
        />
      </div>
    )}

    {/* Feed Text */}
    <p className="text-sm leading-relaxed text-gray-800">{text}</p>
  </div>
)

export default function HomePage() {
  const [feedData, setFeedData] = useState([])

  // Dummy data (replace with API later)
  useEffect(() => {
    const dummyPosts = [
      {
        id: 1,
        userName: "Kantik",
        location: "Sonagiri, Bhopal",
        timeAgo: "2 mins ago",
        text: "The cafeteria food is often cold, lacks variety, and the hygiene standards need urgent improvement.",
        imageUrl: "https://picsum.photos/400/200?random=1",
        profileUrl: "https://i.pravatar.cc/100?img=1",
      },
      {
        id: 2,
        userName: "Pravenn",
        location: "Kalpana Nagar, Bhopal",
        timeAgo: "5 mins ago",
        text: "Another post description here.",
        imageUrl: "https://picsum.photos/400/200?random=2",
        profileUrl: "https://i.pravatar.cc/100?img=2",
      },
      {
        id: 3,
        userName: "Rahul",
        location: "MP Nagar, Bhopal",
        timeAgo: "10 mins ago",
        text: "The street lights in our area have been out for three days now. This is creating safety concerns for residents.",
        imageUrl: "https://picsum.photos/400/200?random=3",
        profileUrl: "https://i.pravatar.cc/100?img=3",
      },
      {
        id: 4,
        userName: "Meera",
        location: "Arera Colony, Bhopal",
        timeAgo: "1 hour ago",
        text: "The park in our neighborhood needs maintenance. Several benches are broken and there's garbage accumulating in corners.",
        imageUrl: "https://picsum.photos/400/200?random=4",
        profileUrl: "https://i.pravatar.cc/100?img=4",
      },
    ]
    setFeedData(dummyPosts)
  }, [])

  return (
    <div className="main-screen bg-black text-white flex flex-col relative h-screen">
      {/* Title */}
      <h1 className="text-3xl font-bold py-8 text-center">Explore Feeds</h1>

      {/* Feed Container */}
      <main className="feed-container flex-grow bg-white text-black rounded-t-3xl p-4 pb-20 overflow-y-auto">
        {feedData.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">No posts yet</p>
        ) : (
          feedData.map((item) => <FeedItem key={item.id} {...item} />)
        )}
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  )
}
