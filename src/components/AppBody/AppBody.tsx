import React, { useState } from 'react';

import GenreSelect from '../GenreSelect/GenreSelect';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';
import { useMovies } from '../../shared/hooks/useMovies';
import { ContentStyled, MoviesFilter, MoviesGrid } from '../../App.styled';
import { GENRES, INITIAL_SORTING_OPTIONS } from '../../shared/constants';

const AppBody: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedSort, setSelectedSort] = useState(INITIAL_SORTING_OPTIONS);
  const { movies } = useMovies();

  return (
    <ContentStyled>
      <MoviesFilter>
        <GenreSelect
          genres={GENRES}
          selectedGenre={selectedGenre}
          onSelect={setSelectedGenre}
        />

        <SortControl currentSelection={selectedSort} onSortChange={setSelectedSort} />
      </MoviesFilter>

      <MoviesGrid>
        {movies.length ? movies.map((movie) => {
          return (<MovieTile key={movie.id} movie={movie} />)
        }) : (<div>No data</div>)}
      </MoviesGrid>
    </ContentStyled>
  );
}

export default AppBody;
