import React, { useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import YouTube from "react-youtube";
import "./App.css";

function App() {
  const links = {
    "Sao Paulo": "WcjGyIjHLDA",
    "New York": "MeZ8P73JNtw",
  };
  const cities = ["Sao Paulo", "New York"];
  const [selectedCity, setSelectedCity] = useState(cities[1]);
  const [isNoiseMuted, setIsNoiseMuted] = useState(false);

  const speed = 0.5;
  const opts = {
    height: "100vh",
    width: "100%",
    playerVars: {
      autoplay: 1,
      fs: 0,
      disableKeyboard: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 0,
      rel: 0,
    },
  };
  console.log();
  return (
    <div className="App">
      <div style={{ height: "100vh" }}>
        <YouTube
          videoId={links[selectedCity]}
          opts={opts}
          onPlaybackRateChange={() => {}}
        />
        <ReactAudioPlayer
          src="http://commondatastorage.googleapis.com/codeskulptor-assets/Epoq-Lepidoptera.ogg"
          autoPlay
          controls
          muted={isNoiseMuted}
        />
        <select
          style={{ position: "absolute", top: 10 }}
          value={selectedCity}
          name="city"
          onChange={(event) => setSelectedCity(event.target.value)}
        >
          {cities.map((city) => (
            <option value={city}>{city}</option>
          ))}
        </select>
        <button
          style={{ position: "absolute", top: 10, right: 270 }}
          onClick={() => setIsNoiseMuted(!isNoiseMuted)}
        >
          Mute Radio
        </button>
      </div>
    </div>
  );
}

export default App;
