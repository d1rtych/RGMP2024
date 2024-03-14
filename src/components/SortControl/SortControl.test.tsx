import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SortControl from './SortControl';
import { SORTING_OPTIONS } from '../../shared/constants';

describe('SortControl', () => {
  const mockOnSortChange = jest.fn();

  test('renders with initial selected value', () => {
    const { getByLabelText } = render(
      <SortControl currentSelection="release_date" onSortChange={mockOnSortChange} />
    );
    const selectElement = getByLabelText(/sort by:/i) as HTMLSelectElement;
    expect(selectElement.value).toBe('release_date');
  });

  test('calls onSortChange with new value upon selection change', () => {
    const { getByLabelText } = render(
      <SortControl currentSelection="release_date" onSortChange={mockOnSortChange} />
    );
    const selectElement = getByLabelText(/sort by:/i);
    fireEvent.change(selectElement, { target: { value: 'title' } });

    expect(mockOnSortChange).toHaveBeenCalledWith('title');
  });

  test('renders all sorting options', () => {
    const { getByLabelText } = render(
      <SortControl currentSelection="release_date" onSortChange={mockOnSortChange} />
    );
    const selectElement = getByLabelText(/sort by:/i) as HTMLSelectElement;
    expect(selectElement.length).toEqual(SORTING_OPTIONS.length);
  });
});
