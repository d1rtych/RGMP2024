import type { Meta, StoryObj } from '@storybook/react';

import { mockMovie } from '../utils/mocks/movie.mock';
import MovieTile from '../components/MovieTile/MovieTile';

const meta = {
  title: 'Components/MovieTile',
  component: MovieTile,
  argTypes: {},
  args: {
    movie: mockMovie,
  }
} satisfies Meta<typeof MovieTile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};





