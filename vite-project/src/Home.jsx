import React from 'react';
import './Home.css'; // We'll create this file next

// SVG Icons (Minimalist Style)
const SparkleIcon = () => (
  <svg width="28" height="35" viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 17.5C7.73199 17.5 14 25.335 14 35C14 25.335 20.268 17.5 28 17.5C20.268 17.5 14 9.66498 14 0C14 9.66498 7.73199 17.5 0 17.5Z" fill="#E55733"/>
</svg>

);

const CameraIcon = () => (
    <svg className="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
        <circle cx="12" cy="13" r="4"></circle>
    </svg>
);

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
    <div className="feed-item">
        <div className="feed-item-header">
            <div className="profile-pic-placeholder">
                <ImageIcon />
            </div>
            <div className="user-info">
                <span className="user-name">{userName}</span>
                <span className="location">{location}</span>
            </div>
            <span className="time-ago">{timeAgo}</span>
        </div>
        {imageUrl && (
            <div className="feed-item-image-placeholder">
                <ImageIcon />
            </div>
        )}
        <p className="feed-item-text">{text}</p>
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
        <div className="main-screen">
            <div className="status-bar">
                <span>19:27</span>
                <div className="status-icons">
                    <span>📶</span>
                    <span>🔋</span>
                </div>
            </div>
            <header className="app-header">
                <SparkleIcon />
                <h1 className="app-title">Explore Feeds</h1>
                <CameraIcon />
            </header>

            <main className="feed-container">
                {feedData.map(item => (
                    <FeedItem key={item.id} {...item} />
                ))}
            </main>

            <nav className="bottom-nav">
                <button className="nav-item active">
                    <HomeIcon />
                    <span>Home</span>
                </button>
                <button className="nav-item">
                    <AddPostIcon />
                    <span>Complaint</span>
                </button>
                <button className="nav-item">
                    <ActivityIcon />
                    <span>Track</span>
                </button>
                <button className="nav-item">
                    <AccountIcon />
                    <span>Profile</span>
                </button>
            </nav>
        </div>
    );
};

export default Home;
