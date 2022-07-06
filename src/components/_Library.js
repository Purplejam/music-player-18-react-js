import React from 'react';
import LibrarySong from './LibrarySong.js';



function Library({songs, setSong, setCurrentSong, setPlaying, isPlaying, audioRef, libraryStatus, setLibraryStatus}) {
	return(
		<div className={`${libraryStatus ? "library-active" : ''} library` }>
			<h2>Library</h2>
			<div className="library-songs">
				{songs.map(song => <LibrarySong 
					song={song}
					audioRef={audioRef}
					isPlaying={isPlaying}
					setPlaying={setPlaying}
					setCurrentSong={setCurrentSong}
					key={song.id}
					songs={songs}
					setSong={setSong}
				/>)}
			</div>
		</div>
		)
}


export default Library;