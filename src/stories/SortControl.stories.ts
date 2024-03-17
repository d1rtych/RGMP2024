import type { Meta, StoryObj } from '@storybook/react';
import SortControl from '../components/SortControl/SortControl';
import { fn } from '@storybook/test';
import { INITIAL_SORTING_OPTIONS } from '../shared/constants';


const meta = {
  title: 'Components/SortControl',
  component: SortControl,
  argTypes: {},
  args: {
    currentSelection: INITIAL_SORTING_OPTIONS,
    onSortChange: fn()
  }
} satisfies Meta<typeof SortControl>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};





