import { render, screen, fireEvent } from '@testing-library/react';

import { GENRES } from '../../shared/constants.ts';
import GenreSelect from './GenreSelect.tsx';

const genres = GENRES;
const selectedGenre = 'Comedy';
const onChange = jest.fn();

describe('GenreSelect Component', () => {
  test('renders all genres passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre={'All'} onSelect={onChange} />);
    genres.forEach(genre => {
      expect(screen.getByText(genre)).toBeInTheDocument();
    });
  });

  test('highlights a selected genre passed in props', () => {
    render(<GenreSelect genres={genres} selectedGenre={selectedGenre} onSelect={onChange} />);
    const selectedButton = screen.getByText(selectedGenre);
    console.log(selectedGenre);
    console.log(selectedButton);
    expect(selectedButton).toHaveClass('selected');
  });

  test('calls "onChange" callback with correct genre on genre button click', () => {
    render(<GenreSelect genres={genres} selectedGenre={'All'} onSelect={onChange} />);
    const genreToClick = screen.getByText('Comedy');
    fireEvent.click(genreToClick);
    expect(onChange).toHaveBeenCalledWith('Comedy');
  });
});
