import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Spotify</h2>
      </div>
      <ul className="sidebar-nav">
        <li className="active">Home</li>
        <li>Search</li>
        <li>Your Library</li>
      </ul>
      
      <div className="sidebar-playlists">
        <h4>Playlists</h4>
        <ul>
          <li>Liked Songs</li>
          <li>My Playlist #1</li>
          <li>Chill Vibes</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;