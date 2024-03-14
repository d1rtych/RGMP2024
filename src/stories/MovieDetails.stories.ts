import type { Meta, StoryObj } from '@storybook/react';

import MovieDetails from '../components/MovieDetails/MovieDetails';
import { mockMovie } from '../utils/mocks/movie.mock';

const meta = {
  title: 'Components/MovieDetails',
  component: MovieDetails,
  argTypes: {},
  args: {
    movie: mockMovie,
  }
} satisfies Meta<typeof MovieDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};





