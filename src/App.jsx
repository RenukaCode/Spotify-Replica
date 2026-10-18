import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PlayerBar from "./components/PlayerBar";
import PlaylistGrid from "./components/PlaylistGrid";
import TrackList from "./components/TrackList";
import "./App.css";

function App() {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handleSelectPlaylist = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  const handleBack = () => {
    setSelectedPlaylist(null);
  };

  const handleSelectTrack = (track) => {
    console.log("Clicked track:", track.title);
  }
  return (
    <div className="app-container">
      <div className="main-layout">
        <Sidebar />
        <div className="main-content">
          {selectedPlaylist ? (
            <TrackList 
            playlist={selectedPlaylist}
            onBack={handleBack}
            onSelectTrack={handleSelectTrack}
            />
          ):(
            <PlaylistGrid onSelectPlaylist={handleSelectPlaylist}/>
          )}

        </div>
      </div>
      <PlayerBar />
    </div>
  );
}

export default App;