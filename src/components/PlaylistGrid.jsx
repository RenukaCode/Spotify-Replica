import "./PlaylistGrid.css";
import { playlists } from "../data/tracks";

const PlaylistGrid = ({ onSelectPlaylist }) => {

  return (
    <div className="playlist-section">
      <h2>Good evening</h2>
      <div className="playlist-grid">
        {playlists.map((playlist) => (
          <div
            key={playlist.id}
            className="playlist-card"
            onClick={() => onSelectPlaylist(playlist)}
          >
            <img src={playlist.cover} alt={playlist.name} />
            <h3>{playlist.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistGrid;