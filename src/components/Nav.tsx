import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faCompactDisc } from '@fortawesome/free-solid-svg-icons';

type NavPropsType = {
	libraryStatus: boolean;
	setLibraryStatus: Function;
}

function Nav({libraryStatus, setLibraryStatus}: NavPropsType) {
	//icon
	const musicIcon = <FontAwesomeIcon icon={faMusic} />
	const discIcon = <FontAwesomeIcon icon={faCompactDisc} />

	return(
		<nav>
			<a data-testid="logo-icon" href="/"><h1>{discIcon} Music For Coding</h1></a>
			<button onClick={() => setLibraryStatus(!libraryStatus)}>
				Library {musicIcon}
			</button>
		</nav>
		)
}


export default Nav;