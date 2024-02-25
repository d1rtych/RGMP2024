import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import GenreSelect from './components/GenreSelect';
import SearchBar from './components/SearchBar';
import movieService from './services/movieService.tsx';
import { horizontalPadding, verticalPadding } from './shared/styles/constants.ts';
import { Movie } from './interfaces/movie.interface.ts';

import backgroundImg from './assets/images/movies-bg.jpg';
import './App.css';
import { TypographyBold } from './shared/styles/styled.tsx';
import { colorRed, colorWhite } from './shared/styles/colors.ts';

const ContainerStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BannerStyled = styled.div`
  height: 398px;
  padding: ${verticalPadding} ${horizontalPadding};
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg}) center no-repeat;
  background-size: cover;
`;

const HeaderRowStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoStyled = styled.div`
  color: ${colorRed};
  font-size: 20px;
`;

const TitleStyled = styled.h1`
  max-width: 950px;
  margin: 70px auto 20px;
  color: ${colorWhite};
  text-transform: uppercase;
  font-weight: 300;
`;

const genres = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime'];

const App: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch(error => {
        console.log(error);
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
        genres={genres}
        selectedGenre={selectedGenre}
        onSelect={handleGenreSelect}
      />

      {movies.length ? movies.map((movie) => {
        console.log(movie.title);
        return (<div>{movie.title}</div>)
      }) : (<div>No data</div>)}
    </ContainerStyled>
  );
}

export default App;
