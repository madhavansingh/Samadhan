import React from 'react';
import './index.css'; // Optional, if you want custom styles

// SVG Icons (Minimalist Style)

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

const ImageIcon = () => (
  <svg className="icon image-placeholder-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
  </svg>
);

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
);

const Home = () => {
  // Corrected Dummy data
  const feedData = [
    {
      id: 1,
      userName: 'Kantik',
      location: 'Sonagiri, Bhopal',
      timeAgo: '2 Mins ago',
      text: 'The cafeteria food is often cold, lacks variety, and the hygiene standards need urgent improvement for everyone\'s health and safety.',
      imageUrl: 'placeholder'
    },
    {
      id: 2,
      userName: 'Pravenn',
      location: 'Kalpana nagar, Bhopal',
      timeAgo: '5 Mins ago',
      text: 'Another post description here.',
      imageUrl: 'placeholder'
    }
    // Add more feed items if needed
  ];

  return (
    <div className="main-screen max-w-[400px] h-[800px] mx-auto my-8 bg-black text-white rounded-3xl overflow-hidden flex flex-col relative shadow-lg">
      
        <h1 className="app-title text-3xl font-bold p-11 text-center">Explore Feeds</h1>
      
      <main className="feed-container flex-grow bg-white text-black rounded-t-3xl p-4 pb-20 overflow-y-auto">
        {feedData.map(item => (
          <FeedItem key={item.id} {...item} />
        ))}
      </main>

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

export default Home;
