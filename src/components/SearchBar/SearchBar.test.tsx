import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchBar from './SearchBar';

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

  test('calls "onSearch" prop with proper value after typing and clicking the SEARCH button', async () => {
    render(<SearchBar initialQuery={""} onSearch={onSearch} />);
    const inputElement = screen.getByRole('textbox');
    const newValue = "new search query";
    await userEvent.type(inputElement, newValue);

    const searchButton = screen.getByRole('button', { name: /search/i });
    await userEvent.click(searchButton);

    expect(onSearch).toHaveBeenCalledWith(newValue);
  });

  test('calls "onSearch" prop with proper value after typing and pressing Enter key', async () => {
    render(<SearchBar initialQuery={""} onSearch={onSearch} />);
    const inputElement = screen.getByRole('textbox');
    const newValue = "new search query";
    await userEvent.type(inputElement, newValue);
    await userEvent.type(inputElement, '{enter}');

    expect(onSearch).toHaveBeenCalledWith(newValue);
  });
});
