import React, { useEffect, useState } from 'react';

import GenreSelect from './components/GenreSelect';
import SearchBar from './components/SearchBar';
import movieService from './services/movieService.tsx';
import { Movie } from './interfaces/movie.interface.ts';

import { TypographyBold } from './shared/styles/styled.tsx';
import { BannerStyled, ContainerStyled, HeaderRowStyled, LogoStyled, TitleStyled } from './App.styled.tsx';
import { GENRES } from './shared/constants.ts';

const App: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [movies, setMovies] = useState<Movie[]>([]);

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

  const handleGenreSelect = (genre: string) => {
    setSelectedGenre(genre);
    console.log(genre);
  };

  return (
    <ContainerStyled>
      <BannerStyled>
        <HeaderRowStyled>
          <LogoStyled>
            <TypographyBold>netflix</TypographyBold>
            <span>roulette</span>
          </LogoStyled>
          <button>+ Add Movie</button>
        </HeaderRowStyled>
        <TitleStyled>FIND YOUR MOVIE</TitleStyled>
        <SearchBar initialQuery={''} onSearch={onSearch} />
      </BannerStyled>

      <GenreSelect
        genres={GENRES}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      {movies.length ? movies.map((movie) => {
        return (<div>{movie.title}</div>)
      }) : (<div>No data</div>)}
    </ContainerStyled>
  );
}

export default App;
