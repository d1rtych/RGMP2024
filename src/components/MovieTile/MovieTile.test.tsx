import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MovieTile from './MovieTile';
import { mockMovie } from '../../utils/mocks/movie.mock';
import { MovieContext } from '../../shared/contexts/MovieContext';

describe('MovieTile', () => {
  let modalRoot: HTMLElement;

  beforeEach(() => {
    modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal-root');
    document.body.appendChild(modalRoot);
  });

  afterEach(() => {
    document.body.removeChild(modalRoot);
  });

  test('renders movie tile with basic information', () => {
    render(<MovieTile movie={mockMovie} />);

    const title = screen.getByText(mockMovie.title);
    const year = screen.getByText(new Date(mockMovie.release_date).getFullYear());
    const genres = screen.getByText(mockMovie.genres.join(', '));
    const poster = screen.getByAltText(mockMovie.title);

    expect(title).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(poster).toHaveAttribute('src', `${mockMovie.poster_path}`);
  });

  test('sets selected movie on tile click', async () => {
    const mockSetSelectedMovie = jest.fn();

    render(
      <MovieContext.Provider value={{ selectedMovie: null, setSelectedMovie: mockSetSelectedMovie }}>
        <MovieTile movie={mockMovie} />
      </MovieContext.Provider>
    );

    const tile = screen.getByTestId('movie-tile');
    await userEvent.click(tile)

    expect(mockSetSelectedMovie).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedMovie).toHaveBeenCalledWith(mockMovie);
  });

  test('toggles menu visibility on menu button click', async () => {
    render(<MovieTile movie={mockMovie} />);

    const menuButton = screen.getByText('...');
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();

    await userEvent.click(menuButton);

    expect(screen.getByText('Edit')).toBeInTheDocument();

    await userEvent.click(menuButton);

    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
  });

  test('shows edit modal on "Edit" menu item selection', async () => {
    render(<MovieTile movie={mockMovie} />);

    const menuButton = screen.getByText('...');
    await userEvent.click(menuButton);

    const editButton = screen.getByText('Edit');
    await userEvent.click(editButton);

    expect(screen.getByText('Edit Movie')).toBeInTheDocument();
  });

  test('shows delete confirmation modal on "Delete" menu item selection', async () => {
    render(<MovieTile movie={mockMovie} />);

    const menuButton = screen.getByText('...');
    await userEvent.click(menuButton);

    const deleteButton = screen.getByText('Delete');
    await userEvent.click(deleteButton);

    expect(screen.getByText('Are you sure you want to delete this movie?')).toBeInTheDocument();
  });

  test('closes modals properly', async () => {
    render(<MovieTile movie={mockMovie} />);

    const menuButton = screen.getByText('...');
    await userEvent.click(menuButton);
    const editButton = screen.getByText('Edit');
    await userEvent.click(editButton);

    expect(screen.getByText('Edit Movie')).toBeInTheDocument();

    const closeButton = screen.getByText('X');
    await userEvent.click(closeButton);

    expect(screen.queryByText('Edit Movie')).not.toBeInTheDocument();
  });
});
