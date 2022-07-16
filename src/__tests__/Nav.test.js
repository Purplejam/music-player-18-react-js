import {render, screen} from '@testing-library/react';
import Nav from '../components/Nav';

describe('<Nav/>', () => {
	it('renders nav properly', () => {
		const {container, debug} = render(
			<Nav/>
			)
		const text = screen.getByText('Library');
		expect(text).toBeInTheDocument();

		const header = screen.getByText('Music For Coding');
		expect(header).toBeInTheDocument();

		const logo = screen.getByTestId('logo-icon')
		expect(logo).toHaveAttribute('href', '/');
	})

	it('matches the snapshot', () => {
		const {container, debug} = render(
			<Nav/>
			)	
			expect(container).toMatchSnapshot();
	})
})

