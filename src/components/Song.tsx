 import {SongType} from '../App';

//types
 type SongPropsType = {
 	currentSong: SongType
 }

function Song({currentSong}: SongPropsType) {
	return(
		<div className="song-container">
			<img src={currentSong.cover} alt="image"/>
			<h2>{currentSong.name}</h2>
			<h3>{currentSong.artist}</h3>
		</div>
		)
}


export default Song;