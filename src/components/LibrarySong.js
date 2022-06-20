import React, {useState} from 'react';

function LibrarySong({
	songs, 
	setSong, 
	song, 
	setCurrentSong, 
	setPlaying, 
	isPlaying, 
	audioRef}) {

//set active song with click
function setActiveSong() {
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
	async function songSelectHandler() {
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