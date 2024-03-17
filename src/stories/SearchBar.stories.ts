import { Meta, StoryObj } from '@storybook/react';

import SearchBar from '../components/SearchBar/SearchBar';
import { SearchFormProps } from '../components/SearchBar/types';

const meta: Meta<SearchFormProps> = {
  title: 'Components/SearchBar',
  component: SearchBar,
};

export default meta;

// Template for the stories
type Story = StoryObj<typeof meta>;

// Story: Default
export const Default: Story = {};
