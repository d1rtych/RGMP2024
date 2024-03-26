import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import MovieForm from './MovieForm';

describe('MovieForm', () => {
  it('submits correct data when form is filled and submitted', async () => {
    const mockSubmit = jest.fn();
    render(<MovieForm onSubmit={mockSubmit} />);

    await userEvent.type(screen.getByLabelText(/title/i), 'Test Movie');
    await userEvent.type(screen.getByLabelText(/release date/i), '2022-05-20');
    await userEvent.type(screen.getByLabelText(/movie url/i), 'http://testmovie.com/poster.jpg');
    await userEvent.type(screen.getByLabelText(/rating/i), '8.5');
    await userEvent.selectOptions(screen.getByLabelText(/genre/i), ['Action', 'Drama']);
    await userEvent.type(screen.getByLabelText(/runtime/i), '120');
    await userEvent.type(screen.getByLabelText(/overview/i), 'This is a test movie.');

    await userEvent.click(screen.getByRole('button', { name: /submit/i }));

    expect(mockSubmit).toHaveBeenCalledWith({
      title: 'Test Movie',
      release_date: '2022-05-20',
      poster_path: 'http://testmovie.com/poster.jpg',
      vote_average: 8.5,
      genres: ['Action', 'Drama'],
      runtime: 120,
      overview: 'This is a test movie.',
    });
  });
});
