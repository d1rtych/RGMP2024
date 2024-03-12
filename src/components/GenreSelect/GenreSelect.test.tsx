import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { GENRES } from '../../shared/constants';
import GenreSelect from './GenreSelect';

const genres = GENRES;
const selectedGenre = 'Comedy';
const onChange = jest.fn();

describe('GenreSelect Component', () => {
  test('renders all genres passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre='All' onSelect={onChange} />);
    genres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  test('highlights a selected genre passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onChange} />);
    const selectedButton = screen.getByText(selectedGenre);
    expect(selectedButton).toHaveClass('selected');
  });

  test('calls "onChange" callback with correct genre on genre button click', async () => {
    render(<GenreSelect genres={genres} selectedGenre='All' onSelect={onChange} />);
    const genreToClick = screen.getByText('Comedy');
    await userEvent.click(genreToClick);
    expect(onChange).toHaveBeenCalledWith('Comedy');
  });
});
