import { render, screen } from '@testing-library/react';

import MovieDetails from './MovieDetails';
import { formatRuntime } from '../../utils/utils';
import { mockMovie } from '../../utils/mocks/movie.mock';
import { createWrapper } from '../../utils/createWrapper.context';

jest.mock('../../utils/utils', () => ({
  formatRuntime: jest.fn().mockReturnValueOnce('2h 22min'),
}));

describe('MovieDetails', () => {
  test('renders movie details when movie is selected', () => {
    render(
      createWrapper(<MovieDetails />)
    );

    const title = screen.getByText(mockMovie.title);
    const runtime = screen.getByText('2h 22min');
    const overview = screen.getByText(mockMovie.overview);

    expect(title).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
    expect(formatRuntime).toHaveBeenCalledTimes(1);
    expect(formatRuntime).toHaveBeenCalledWith(mockMovie.runtime);
  });

  test('does not render movie details when no movie is selected', () => {
    render(<MovieDetails />);

    expect(screen.queryByText(mockMovie.title)).not.toBeInTheDocument();
  });
});

