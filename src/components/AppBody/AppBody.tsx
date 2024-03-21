import React, { useCallback, useEffect, useState } from 'react';

import GenreSelect from '../GenreSelect/GenreSelect';
import MovieTile from '../MovieTile/MovieTile';
import SortControl from '../SortControl/SortControl';
import movieService from '../../services/movieService';
import { ContentStyled, MoviesFilter, MoviesGrid } from '../../App.styled';
import { GENRES, INITIAL_SORTING_OPTIONS } from '../../shared/constants';
import { Movie } from '../../interfaces/movie.interface';

const AppBody: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedSort, setSelectedSort] = useState(INITIAL_SORTING_OPTIONS);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        setMovies(data);
        const allGenres = data.flatMap(movie => movie.genres);
        const uniqueGenres = new Set(allGenres);

        console.log(uniqueGenres);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  const handleSortChange = useCallback((newSort: string) => {
    setSelectedSort(newSort);
  }, [setSelectedSort]);

  return (
    <ContentStyled>
      <MoviesFilter>
        <GenreSelect
          genres={GENRES}
          selectedGenre={selectedGenre}
          onSelect={setSelectedGenre}
        />

        <SortControl currentSelection={selectedSort} onSortChange={handleSortChange} />
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
