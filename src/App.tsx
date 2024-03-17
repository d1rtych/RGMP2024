import React, { useCallback, useContext, useEffect, useState } from 'react';

import movieService from './services/movieService';
import { Movie } from './interfaces/movie.interface';

import { TypographyBold } from './shared/styles/styled';
import {
  BannerStyled,
  ContainerStyled,
  ContentStyled,
  HeaderRowStyled,
  LogoStyled,
  MoviesFilter,
  MoviesGrid,
  TitleStyled
} from './App.styled';
import { GENRES, INITIAL_SORTING_OPTIONS } from './shared/constants';
import GenreSelect from './components/GenreSelect/GenreSelect';
import SearchBar from './components/SearchBar/SearchBar';
import MovieTile from './components/MovieTile/MovieTile';
import SortControl from './components/SortControl/SortControl';
import { MovieContext } from './shared/contexts/MovieContext';
import MovieDetails from './components/MovieDetails/MovieDetails';

const App: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedSort, setSelectedSort] = useState(INITIAL_SORTING_OPTIONS);
  const [movies, setMovies] = useState<Movie[]>([]);
  const { selectedMovie } = useContext(MovieContext);

  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  const onSearch = (query: string) => {
    console.log(query);
  }

  const handleSortChange = useCallback((newSort: string) => {
    setSelectedSort(newSort);
  }, [setSelectedSort]);

  return (
    <ContainerStyled>
      {selectedMovie
        ? (<MovieDetails />)
        : (<BannerStyled>
          <HeaderRowStyled>
            <LogoStyled>
              <TypographyBold>netflix</TypographyBold>
              <span>roulette</span>
            </LogoStyled>
            <button>+ Add Movie</button>
          </HeaderRowStyled>
          <TitleStyled>FIND YOUR MOVIE</TitleStyled>
          <SearchBar initialQuery='' onSearch={onSearch} />
        </BannerStyled>)}

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
    </ContainerStyled>
  );
}

export default App;
