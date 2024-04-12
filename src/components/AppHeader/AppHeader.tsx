import React, { useContext, useState } from 'react';

import MovieDetails from '../MovieDetails/MovieDetails';
import SearchBar from '../SearchBar/SearchBar';
import Modal from '../Modal/Modal';
import MovieForm from '../MovieForm/MovieForm';
import { useFilters } from '../../shared/hooks';
import { MovieContext } from '../../shared/contexts/MovieContext';

import { BannerStyled, HeaderRowStyled, LogoStyled, TitleStyled } from '../../App.styled';
import { TypographyBold } from '../../shared/styles/styled';
import { MovieFormData } from '../../interfaces/movie.interface';

const AppHeader: React.FC = () => {
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);
  const { search, handleSearchInput } = useFilters();
  const { selectedMovie } = useContext(MovieContext);

  const addMovieHandler = () => {
    setShowAddMovieModal(true);
  }

  const onMovieFormSubmitted = (movie: MovieFormData) => {
    console.log(movie);
  }

  return (
    <>
      {selectedMovie
        ? (<MovieDetails />)
        : (<BannerStyled>
          <HeaderRowStyled>
            <LogoStyled>
              <TypographyBold>netflix</TypographyBold>
              <span>roulette</span>
            </LogoStyled>
            <button onClick={addMovieHandler}>+ Add Movie</button>
          </HeaderRowStyled>
          <TitleStyled>FIND YOUR MOVIE</TitleStyled>
          <SearchBar initialQuery={search} onSearch={handleSearchInput} />
        </BannerStyled>)}
      {showAddMovieModal && (
        <Modal handleClose={() => {setShowAddMovieModal(false)}}>
          <MovieForm onSubmit={onMovieFormSubmitted} />
        </Modal>
      )}`
    </>
  );
}

export default AppHeader;
