import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { INITIAL_SORTING_OPTIONS } from '../constants';
import { GetMoviesParams } from '../../services/movieService';

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialGenre = searchParams.get('genre') || 'All';
  const initialSortBy = searchParams.get('sortBy') || INITIAL_SORTING_OPTIONS;
  const initialSearch = searchParams.get('search') || '';

  const [selectedGenre, setSelectedGenre] = useState(initialGenre);
  const [selectedSort, setSelectedSort] = useState(initialSortBy);
  const [search] = useState(initialSearch);

  const params: GetMoviesParams = useMemo(() => ({
    filter: selectedGenre !== 'All' ? selectedGenre : undefined,
    sortBy: selectedSort,
    search: initialSearch,
    searchBy: initialSearch ? 'title' : undefined,
  }), [selectedGenre, selectedSort, initialSearch]);

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    searchParams.set('genre', genre);
    setSearchParams(searchParams, { replace: true });
  };

  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort);
    searchParams.set('sortBy', sort);
    setSearchParams(searchParams, { replace: true });
  };

  const handleSearchInput = (query: string) => {
    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }
    setSearchParams(searchParams, { replace: true });
  };

  return {
    selectedGenre,
    selectedSort,
    search,
    handleGenreSelect,
    handleSortSelect,
    handleSearchInput,
    params
  };
};
