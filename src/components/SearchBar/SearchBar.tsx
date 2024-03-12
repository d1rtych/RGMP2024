import React, { useCallback, useState } from 'react';

import { SearchInput, StyledSearchForm } from './styled';
import { FilledButton } from '../Button';
import { SearchFormProps } from './types';

const SearchBar: React.FC<SearchFormProps> = ({ initialQuery, onSearch }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSearch = useCallback(() => {
    onSearch(query);
  }, [onSearch, query]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledSearchForm>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What do you want to watch?"
      />
      <FilledButton onClick={handleSearch}>
        SEARCH
      </FilledButton>
    </StyledSearchForm>
  );
};

export default SearchBar;
