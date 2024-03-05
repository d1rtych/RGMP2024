import React, { useEffect, useState } from 'react';

import movieService from './services/movieService.tsx';
import { Movie } from './interfaces/movie.interface.ts';

import { TypographyBold } from './shared/styles/styled.tsx';
import { BannerStyled, ContainerStyled, HeaderRowStyled, LogoStyled, TitleStyled } from './App.styled.tsx';
import { GENRES } from './shared/constants.ts';
import GenreSelect from './components/GenreSelect/GenreSelect.tsx';
import SearchBar from './components/SearchBar/SearchBar.tsx';

const App: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState('Comedy');
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
        <SearchBar initialQuery='' onSearch={onSearch} />
      </BannerStyled>

      <GenreSelect
        genres={GENRES}
        selectedGenre={selectedGenre}
        onSelect={setSelectedGenre}
      />

      {movies.length ? movies.map((movie) => {
        return (<div key={movie.id}>{movie.title}</div>)
      }) : (<div>No data</div>)}
    </ContainerStyled>
  );
}

export default App;
