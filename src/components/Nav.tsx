import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

type NavPropsType = {
	libraryStatus: boolean;
	setLibraryStatus: Function;
}

function Nav({libraryStatus, setLibraryStatus}: NavPropsType) {
	//icon
	const musicIcon = <FontAwesomeIcon icon={faMusic} />

	return(
		<nav>
			<a href="/"><h1>Music For Coding</h1></a>
			<button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library {musicIcon}
			</button>
		</nav>
		)
}


export default Nav;