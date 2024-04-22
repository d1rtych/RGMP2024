import React from 'react';

import GenreSelect from '../GenreSelect/GenreSelect';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';
import { useFilters, useMovies } from '../../shared/hooks';
import { ContentStyled, MoviesFilter, MoviesGrid } from './styled';
import { GENRES } from '../../shared/constants';

const AppBody: React.FC = () => {
  const {
    selectedGenre,
    selectedSort,
    params,
    handleGenreSelect,
    handleSortSelect
  } = useFilters();
  const { data: movies, isLoading, error } = useMovies(params);

  return (
    <ContentStyled>
      <MoviesFilter>
        <GenreSelect
          genres={GENRES}
          selectedGenre={selectedGenre}
          onSelect={handleGenreSelect}
        />
        <SortControl
          currentSelection={selectedSort}
          onSortChange={handleSortSelect}
        />
      </MoviesFilter>
      <MoviesGrid>
        {isLoading ? <div>Loading...</div> :
          error ? <div>Something went wrong</div> :
            movies?.length ? movies.map(movie => <MovieTile key={movie.id} movie={movie} />) :
              <div>No data</div>}
      </MoviesGrid>
    </ContentStyled>
  );
};

export default AppBody;
