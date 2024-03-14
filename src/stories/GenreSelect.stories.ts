import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { GenreSelectProps } from '../components/GenreSelect/types';
import GenreSelect from '../components/GenreSelect/GenreSelect';
import { GENRES } from '../shared/constants';

// Define the metadata for the Storybook
const meta: Meta<GenreSelectProps> = {
  title: 'Components/GenreSelect',
  component: GenreSelect,
  argTypes: {
    selectedGenre: {
      control: 'select',
      options: GENRES
    },
    onSelect: { action: 'onSelect' },
  },
  args: {
    genres: GENRES,
    selectedGenre: 'All',
    onSelect: fn(),
  },
};

export default meta;

// Template for the stories
type Story = StoryObj<typeof meta>;

// Story: Default
export const Default: Story = {};
