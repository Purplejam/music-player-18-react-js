import {render, screen} from '@testing-library/react';
import LibrarySong from '../components/LibrarySong';
import { v4 as uuidv4 } from "uuid";

const mockSong = {
    name: 'The Greatest Song',
    cover: 'Fantastic Image',
    artist: 'Popular Artist',
    audio: 'link',
    color: ['#ffffff', '#000000'],
    id: uuidv4(),
    active: false,
    favorite: true,
}

describe('<LibrarySong/>', () => {
	it('renders properly a custom song', () => {
		const {container, debug} = render(
			<LibrarySong currentSong={mockSong} song={mockSong}/>
			)
		const nameText = screen.getByText('The Greatest Song');
		expect(nameText).toBeInTheDocument();

		const artistText = screen.getByText('Popular Artist');
		expect(artistText).toBeInTheDocument();
	})

	it('renders proper icon if it`s favorite song', () => {
		const {container, debug} = render(
			<LibrarySong currentSong={mockSong} song={mockSong}/>
			)

		const icon = screen.getByTestId('like-icon');
		expect(icon).toHaveAttribute('data-icon', 'heart-circle-check');
	})

	it('matches the snapshot', () => {
		const {container, debug} = render(
			<LibrarySong currentSong={mockSong} song={mockSong}/>
			)	
			expect(container).toMatchSnapshot();
	})
})

