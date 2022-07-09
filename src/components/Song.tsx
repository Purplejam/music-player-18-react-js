 import {SongType} from '../App';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
 import Equalizer from './Equalizer';

//types
 type SongPropsType = {
 	currentSong: SongType,
 	songs: SongType[],
 	setSong: Function,
 	isPlaying: boolean
 }

//icons
 const thumbsUpIcon = <FontAwesomeIcon icon={faThumbsUp} />

	function Song({currentSong, songs, setSong, isPlaying}: SongPropsType) {

		function favoriteSongsHandler(): void {
			const favoriteStatus = currentSong.favorite;
			const newSongs = songs.map((item) => {
				if(item.id === currentSong.id) {
					return {
						...item,
						favorite: !favoriteStatus
					}
				} else {
					return {
						...item
					}
				}
			})
			setSong(newSongs);
			currentSong.favorite = !favoriteStatus;
		}
		return(
			<div className={`song-container ${!currentSong.favorite ? '' : "favorite"}`}>
				<Equalizer colors={currentSong.color} isPlaying={isPlaying}/>
				<img src={currentSong.cover} alt="image"/>
				<h2>{currentSong.name}</h2>
				<h3>{currentSong.artist}</h3>
				<span onClick={favoriteSongsHandler}>{thumbsUpIcon}</span>			
			</div>
		)
	}


export default Song;