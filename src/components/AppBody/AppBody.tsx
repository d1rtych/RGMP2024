import React, { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import GenreSelect from '../GenreSelect/GenreSelect';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';
import { useMovies } from '../../shared/hooks/useMovies';
import { ContentStyled, MoviesFilter, MoviesGrid } from '../../App.styled';
import { GENRES, INITIAL_SORTING_OPTIONS } from '../../shared/constants';

const AppBody: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get('genre') || 'All';
  const sortBy = searchParams.get('sortBy') || INITIAL_SORTING_OPTIONS;
  const search = searchParams.get('search') || undefined;
  const [selectedGenre, setSelectedGenre] = useState(genre);
  const [selectedSort, setSelectedSort] = useState(sortBy);
  const params = useMemo(() => ({
    filter: genre !== 'All' ? genre : undefined,
    sortBy: sortBy,
    search: search ? search : undefined,
    searchBy: search ? 'title' : undefined,
  }), [genre, sortBy, search]);
  const { movies, isLoading, error } = useMovies(params);

  const handleGenreSelect = (selectedGenre: string): void => {
    searchParams.set('genre', selectedGenre);
    setSearchParams(searchParams, { replace: true });
    setSelectedGenre(selectedGenre);
  };

  const handleSortSelect = (sort: string): void => {
    searchParams.set('sortBy', sort);
    setSearchParams(searchParams, { replace: true });
    setSelectedSort(sort);
  };

  return (
    <ContentStyled>
      <MoviesFilter>
        <GenreSelect
          genres={GENRES}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />

        <SortControl currentSelection={selectedSort} onSortChange={handleSortSelect} />
      </MoviesFilter>

      <MoviesGrid>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Something went wrong</div>
        ) : movies?.length ? (
          movies.map((movie) => (
            <MovieTile key={movie.id} movie={movie} />
          ))
        ) : (
          <div>No data</div>
        )}
      </MoviesGrid>
    </ContentStyled>
  );
}

export default AppBody;
