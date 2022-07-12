import {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
import {SongType, songInfoType} from '../App'; 
//types
type PlayerPropsType = {
	songs: SongType[];
	setCurrentSong: Function, 
	currentSong: SongType, 
	isPlaying: boolean, 
	setPlaying: Function, 
	audioRef: any, 
	setSong: Function,
	setSongInfo: Function, 
	songInfo: songInfoType
}


function Player({
	songs, 
	setCurrentSong, 
	currentSong, 
	isPlaying, 
	setPlaying, 
	audioRef, 
	setSong,
	setSongInfo, 
	songInfo}: PlayerPropsType) {
//icons
	const playIcon = <FontAwesomeIcon onClick={playSongHandler} size="2x" className="play" icon={faPlay} />
	const pauseIcon = <FontAwesomeIcon onClick={playSongHandler} size="2x" className="pause" icon={faPause} />
	const skipBack = <FontAwesomeIcon onClick={() => skipTrackHandler('back')} size="2x" className="skip-back" icon={faAngleLeft} />
	const skipForward = <FontAwesomeIcon onClick={() => skipTrackHandler('forward')} size="2x" className="skip-forward" icon={faAngleRight} />
	

//state
	const [isElapsed, setElapsed] = useState(false);

//handlers
	function playSongHandler(): void {
		if (isPlaying) {
			audioRef.current.pause();
			setPlaying(false);
		} else {
			audioRef.current.play();
			setPlaying(true);
		}
	}

//useEffect on currentSong change
	useEffect(() => {
		const newSongs = songs.map((item: SongType) => {
			if (item.id === currentSong.id) {
				return {
					...item,
					active: true
				}
			} else {
							return {
					...item,
					active: false
				}
			}
		})
		setSong(newSongs);
		if (isPlaying) audioRef.current.play(); 
		if (currentSong.id !== songs[0].id) {
			audioRef.current.play(); 
			setPlaying(true);
		}
	}, [currentSong])

//skip
	function skipTrackHandler(direction: string) {
		const currentIndex = songs.findIndex((item) => item.id === currentSong.id);
		if (direction === 'forward') {
			setCurrentSong(songs[(currentIndex + 1) % songs.length])
		} else if (direction === 'back') {
			if (currentIndex === 0) return setCurrentSong(songs[songs.length - 1]);
			setCurrentSong(songs[currentIndex - 1]);
		}
	}


	function isElapsedHandler(): void  {
		setElapsed(!isElapsed);
	}

	function dragHandler(e: React.ChangeEvent<HTMLInputElement>): void {
		audioRef.current.currentTime = e.target.value;
		setSongInfo({
			...songInfo,
			currentTime: e.target.value
		})
	}

//seconds formatter
	function sec2human(seconds: number): string {
		return Math.floor(seconds / 60) + ":" + ("0" + Math.floor(seconds % 60)).slice(-2);
}

//backward timer
	function toTimeElapsed(seconds: number): string {
		return '-' + Math.floor(Math.abs(seconds) / 60) + ":" + ("0" + Math.floor(Math.abs(seconds) % 60)).slice(-2);
	}

	return(
		<div className="player">
			<div className="time-control">
				<p className="time-counter">{sec2human(songInfo.currentTime)}</p>
				<div style={{background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}} className="track">				
					<input type="range" 
									min={0} 
									id="volume"
									name="volume"
									value={songInfo.currentTime} 
									max={songInfo.duration} 
									onChange={dragHandler}/>
						<div style={{transform: `translateX(${songInfo.animatedInput}%)`}}className="animate-track"></div>
				</div>
				<p className="time-counter" onDoubleClick={isElapsedHandler}>{isElapsed 
					? songInfo.durationElapsed ? toTimeElapsed(songInfo.durationElapsed) : '0:00'
					: sec2human(songInfo.duration)}</p>
			</div>

			<div className="play-control">
			{skipBack}	
			{isPlaying ? pauseIcon : playIcon}
			{skipForward}
			</div>

		</div>
		)
}


export default Player;