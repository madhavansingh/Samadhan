import BottomNavigation from "../components/BottomNavigation"

const ImageIcon = () => (
  <svg
    className="icon image-placeholder-icon"
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
)

const FeedItem = ({ userName, location, timeAgo, text, imageUrl }) => (
  <div className="feed-item mb-6 pb-4 border-b border-gray-200 animate-fadeIn">
    <div className="feed-item-header flex items-center mb-2">
      <div className="profile-pic-placeholder w-10 h-10 bg-gray-300 rounded-lg mr-2 flex justify-center items-center text-gray-500">
        <ImageIcon />
      </div>
      <div className="user-info flex flex-col">
        <span className="user-name font-semibold text-base">{userName}</span>
        <span className="location text-sm text-gray-500">{location}</span>
      </div>
      <span className="time-ago ml-auto text-xs text-gray-400">{timeAgo}</span>
    </div>
    {imageUrl && (
      <div className="feed-item-image-placeholder w-full h-48 bg-gray-200 rounded-xl my-3 flex justify-center items-center">
        <ImageIcon />
      </div>
    )}
    <p className="feed-item-text text-sm leading-relaxed text-gray-800 mt-2">{text}</p>
  </div>
)

export default function HomePage() {
  // Dummy data
  const feedData = [
    {
      id: 1,
      userName: "Kantik",
      location: "Sonagiri, Bhopal",
      timeAgo: "2 Mins ago",
      text: "The cafeteria food is often cold, lacks variety, and the hygiene standards need urgent improvement for everyone's health and safety.",
      imageUrl: "placeholder",
    },
    {
      id: 2,
      userName: "Pravenn",
      location: "Kalpana nagar, Bhopal",
      timeAgo: "5 Mins ago",
      text: "Another post description here.",
      imageUrl: "placeholder",
    },
    {
      id: 3,
      userName: "Rahul",
      location: "MP Nagar, Bhopal",
      timeAgo: "10 Mins ago",
      text: "The street lights in our area have been out for three days now. This is creating safety concerns for residents walking at night.",
      imageUrl: "placeholder",
    },
    {
      id: 4,
      userName: "Meera",
      location: "Arera Colony, Bhopal",
      timeAgo: "1 Hour ago",
      text: "The park in our neighborhood needs maintenance. Several benches are broken and there's garbage accumulating in corners.",
      imageUrl: "placeholder",
    },
  ]

  return (
    <div className="main-screen bg-black text-white flex flex-col relative">
      <h1 className="app-title text-3xl font-bold p-11 text-center">Explore Feeds</h1>

      <main className="feed-container flex-grow bg-white text-black rounded-t-3xl p-4 pb-20 overflow-y-auto">
        {feedData.map((item) => (
          <FeedItem key={item.id} {...item} />
        ))}
      </main>

      <BottomNavigation />
    </div>
  )
}
