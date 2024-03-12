import { render, screen, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar.tsx';

describe('SearchBar', () => {
  const initialQuery = "initial query";
  const onSearch = jest.fn();

  beforeEach(() => {
    onSearch.mockClear();
  });

  test('renders an input with the value equal to initial value passed in props', () => {
    render(<SearchBar initialQuery={initialQuery} onSearch={onSearch} />);
    const inputElement = screen.getByDisplayValue(initialQuery);
    expect(inputElement).toBeInTheDocument();
  });

  test('calls "onSearch" prop with proper value after typing and clicking the SEARCH button', () => {
    render(<SearchBar initialQuery={""} onSearch={onSearch} />);
    const inputElement = screen.getByRole('textbox');
    const newValue = "new search query";
    fireEvent.change(inputElement, { target: { value: newValue } });

    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.click(searchButton);

    expect(onSearch).toHaveBeenCalledWith(newValue);
  });

  test('calls "onSearch" prop with proper value after typing and pressing Enter key', () => {
    render(<SearchBar initialQuery={""} onSearch={onSearch} />);
    const inputElement = screen.getByRole('textbox');
    const newValue = "new search query";
    fireEvent.change(inputElement, { target: { value: newValue } });
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });

    expect(onSearch).toHaveBeenCalledWith(newValue);
  });
});
