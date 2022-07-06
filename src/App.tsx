import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import chillHop from './data';
import {useState, useRef} from 'react';
import Library from './components/Library';
import Nav from './components/Nav';

//types
type songInfoType = {
 currentTime: number | undefined;
 duration: number | undefined;
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
    active: boolean
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

  function getDurationHandler(): void  {
    //const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      duration: audioRef.current?.duration,
      durationElapsed: audioRef.current?.duration,
      animatedInput: 0
    })
  }
  return (
    <div className={`App ${libraryStatus ? "library-margin" : ""}  `}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
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
