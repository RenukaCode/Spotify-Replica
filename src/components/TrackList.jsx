import "./TrackList.css";

const TrackList = ({ playlist, onBack, onSelectTrack }) => {
  if (!playlist) return null;

  return (
    <div className="track-list-section">
      <button className="back-btn" onClick={onBack}>
        ← Back to Playlists
      </button>
      
      <div className="playlist-header">
        <img src={playlist.cover} alt={playlist.name} className="header-cover" />
        <div>
          <p>PLAYLIST</p>
          <h1>{playlist.name}</h1>
        </div>
      </div>

      <table className="track-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Artist</th>
          </tr>
        </thead>
        <tbody>
          {playlist.tracks.map((track, index) => (
            <tr key={track.id} onClick={() => onSelectTrack(track)}>
              <td>{index + 1}</td>
              <td className="track-title">{track.title}</td>
              <td>{track.artist}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrackList;