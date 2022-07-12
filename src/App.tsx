import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import chillHop from './data';
import {useState, useRef, useEffect} from 'react';
import Library from './components/Library';
import Nav from './components/Nav';

//types
export type songInfoType = {
 currentTime: number;
 duration: number;
 durationElapsed: number | undefined;
 animatedInput: number | undefined;
}

export type SongType = {
    name: string,
    cover: string,
    artist: string,
    audio: string,
    color: string[],
    id: string,
    active: boolean,
    favorite: boolean,
}


function App() {
//state
	const [songs, setSong] = useState<SongType[]>(chillHop());
	const [currentSong, setCurrentSong] = useState<SongType>(songs[0]);
	const [isPlaying, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [libraryStatus, setLibraryStatus] = useState<boolean>(true);
  const [songInfo, setSongInfo] = useState<songInfoType>({
    currentTime: 0,
    duration: 0,
    durationElapsed: 0,
    animatedInput: 0
  })
  
  useEffect(() => {
    if (window.innerWidth < 768) {
      setLibraryStatus(false);
    }
  }, [songs])
//handlers
  function timeUpdateHandler(e: React.ChangeEvent<HTMLAudioElement>): void {
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
    const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
    await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
  }

  function getDurationHandler(e: React.ChangeEvent<HTMLAudioElement>): void  {
    setSongInfo({
      ...songInfo,
      duration: e.target.duration,
      durationElapsed: e.target.duration,
      animatedInput: 0
    })
  }
  return (
    <div className={`App ${libraryStatus ? "library-margin" : ""}  `}>
      <Nav 
        libraryStatus={libraryStatus} 
        setLibraryStatus={setLibraryStatus}/>
      <Song 
        currentSong={currentSong} 
        songs={songs} setSong={setSong} 
        isPlaying={isPlaying}/>
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
        setSong={setSong}
        audioRef={audioRef}
        songs={songs} 
        isPlaying={isPlaying}
        currentSong={currentSong}
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
