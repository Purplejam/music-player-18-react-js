 import {SongType} from '../App';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faCirclePlay, faVolumeUp, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';


//types
 type LibrarySongType = {
	 songs: SongType[], 
		setSong: Function, 
		song: SongType, 
		setCurrentSong: Function, 
		setPlaying: Function, 
		isPlaying: boolean, 
		audioRef: any,
		currentSong: SongType
 }

//icons
const playIcon = <FontAwesomeIcon icon={faCirclePlay} />
const volumeIcon = <FontAwesomeIcon icon={faVolumeUp} />
const likeIcon = <FontAwesomeIcon data-testid="like-icon" icon={faHeartCircleCheck} />

function LibrarySong({
	songs, 
	setSong, 
	currentSong,
	song, 
	setCurrentSong, 
	setPlaying, 
	isPlaying, 
	audioRef}: LibrarySongType) {

//set active song with click
function setActiveSong(): void {
	const newSongs = songs.map((item) => {
		if (item.id === song.id) {
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
}

//event handlers
	async function songSelectHandler(): Promise<void> {
		if (isPlaying) {
			setPlaying(false);
			await setCurrentSong(song);
			setPlaying(true);
			audioRef.current.play();
			setActiveSong();
		} 
		if (!isPlaying) {
			await setCurrentSong(song);
			setActiveSong();
		}
	}

	return(
		<div className={`${song.active ? "selected" : ''} library-song`} onClick={songSelectHandler}>
			<img src={song.cover} alt={song.name}/>
			<div className="song-description">
				<h3 className={`${song.favorite ? "favorite" : ''}`}>{song.name}<i>{likeIcon}</i></h3>
				<h4>{song.artist}</h4>
			</div>
			<span className="library-song-icon">{currentSong.id === song.id && isPlaying ? volumeIcon : playIcon}</span>
		</div>
		)
}


export default LibrarySong;