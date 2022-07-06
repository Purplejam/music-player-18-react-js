import Player from './components/Player.tsx';
import Song from './components/Song';
import './styles/app.scss';
import chillHop from './data.js';
import React, {useState, useRef} from 'react';
import Library from './components/Library.js';
import Nav from './components/Nav.tsx';

function App() {
//state
	const [songs, setSong] = useState(chillHop());
	const [currentSong, setCurrentSong] = useState(songs[0]);
	const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const [libraryStatus, setLibraryStatus] = useState(false);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    durationElapsed: 0,
    animatedInput: 0
  })

//handlers
  function timeUpdateHandler(e) {
    let current = e.target.currentTime;
    let duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      durationElapsed: current - duration,
      animatedInput: Math.round(current / duration * 100),
    })
  }

  async function songEndHandler() {
    const currentIndex = songs.findIndex((item) => item.id == currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  }

  function getDurationHandler(e) {
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      duration: audioRef.current.duration,
      durationElapsed: audioRef.current.duration,
      animatedInput: 0
    })
  }
  return (
    <div className={`App ${libraryStatus ? "library-margin" : ""}  `}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} sPlaying={isPlaying} setPlaying={setPlaying}/>
      <Player 
        songs={songs}
        setCurrentSong={setCurrentSong} 
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        setSong={setSong}
        isPlaying={isPlaying} 
        setPlaying={setPlaying}/>
      <Library 
        libraryStatus={libraryStatus} 
        setLibraryStatus={setLibraryStatus}
        setSong={setSong}
        audioRef={audioRef}
        songs={songs} 
        isPlaying={isPlaying}
        setCurrentSong={setCurrentSong} 
        setPlaying={setPlaying}/>
      <audio 
        onLoadedMetadata={getDurationHandler} 
        onEnded={songEndHandler}
        ref={audioRef} 
        src={currentSong.audio} 
        onTimeUpdate={timeUpdateHandler}></audio>
    </div>
  );
}

export default App;
