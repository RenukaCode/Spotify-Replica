import "./PlayerBar.css";

const PlayerBar = () => {
  return (
    <div className="player-bar">
      {/* Left: Track Info */}
      <div className="player-left">
        <div className="track-placeholder">🎵</div>
        <div className="track-info">
          <h4>No track playing</h4>
          <p>Select a song</p>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="player-center">
        <div className="controls">
          <button>⏮</button>
          <button className="play-btn">▶</button>
          <button>⏭</button>
        </div>
        <div className="progress-container">
          <span>0:00</span>
          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>
          <span>0:00</span>
        </div>
      </div>

      {/* Right: Volume */}
      <div className="player-right">
        <span>🔊</span>
        <div className="volume-bar">
          <div className="volume-fill"></div>
        </div>
      </div>
    </div>
  );
};

export default PlayerBar;