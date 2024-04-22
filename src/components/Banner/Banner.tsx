import React, { useState } from 'react';

import { useFilters } from '../../shared/hooks';
import Logo from '../Logo/Logo';
import Modal from '../Modal/Modal';
import MovieForm from '../MovieForm/MovieForm';
import SearchBar from '../SearchBar/SearchBar';

import { MovieFormData } from '../../interfaces/movie.interface';
import { BannerStyled, HeaderRowStyled, TitleStyled } from './styled';

const Banner: React.FC = () => {
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);
  const { search, handleSearchInput } = useFilters();

  const addMovieHandler = () => {
    setShowAddMovieModal(true);
  }

  const onMovieFormSubmitted = (movie: MovieFormData) => {
    console.log(movie);
  }

  return (
    <>
      <BannerStyled>
        <HeaderRowStyled>
          <Logo />
          <button onClick={addMovieHandler}>+ Add Movie</button>
        </HeaderRowStyled>
        <TitleStyled>FIND YOUR MOVIE</TitleStyled>
        <SearchBar initialQuery={search} onSearch={handleSearchInput} />
      </BannerStyled>
      {showAddMovieModal && (
        <Modal handleClose={() => {setShowAddMovieModal(false)}}>
          <MovieForm onSubmit={onMovieFormSubmitted} />
        </Modal>
      )}
    </>
  )
}

export default Banner;
