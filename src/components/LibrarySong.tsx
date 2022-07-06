 import {SongType} from '../App';


//types
 type LibrarySongType = {
	 songs: SongType[], 
		setSong: Function, 
		song: SongType, 
		setCurrentSong: Function, 
		setPlaying: Function, 
		isPlaying: boolean, 
		audioRef: any
 }

function LibrarySong({
	songs, 
	setSong, 
	song, 
	setCurrentSong, 
	setPlaying, 
	isPlaying, 
	audioRef}: LibrarySongType) {

//set active song with click
function setActiveSong(): void {
	const newSongs = songs.map((item) => {
		if (item.id == song.id) {
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
		<div className={`${song.active ? "selected" : null} library-song`} onClick={songSelectHandler}>
			<img src={song.cover} alt="image"/>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
		)
}


export default LibrarySong;