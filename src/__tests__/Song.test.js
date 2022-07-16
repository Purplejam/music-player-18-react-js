import {render, screen} from '@testing-library/react';
import Song from '../components/Song';
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

describe('<Song/>', () => {
	it('renders properly a song info ', () => {
		const {container, debug} = render(
			<Song currentSong={mockSong} isPlaying={true}/>
			)
		const nameText = screen.getByText('The Greatest Song');
		expect(nameText).toBeInTheDocument();

		const artistText = screen.getByText('Popular Artist');
		expect(artistText).toBeInTheDocument();
	})

	it('renders properly an image src', () => {
		const {container, debug} = render(
			<Song currentSong={mockSong} isPlaying={true}/>
			)

		const image = screen.getByAltText('image');
		expect(image).toHaveAttribute('src', 'Fantastic Image');
	})

	it('renders a proper className if the song is favorite', () => {
		const {container, debug} = render(
			<Song currentSong={mockSong} isPlaying={true}/>
			)

		expect(container.firstChild.classList.contains('favorite')).toBe(true);
	})

	it('matches the snapshot', () => {
		const {container, debug} = render(
			<Song currentSong={mockSong} isPlaying={true}/>
			)
		
			expect(container).toMatchSnapshot();
	})
})

