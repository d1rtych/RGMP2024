import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFilters } from '../../shared/hooks';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';

import { BannerStyled, HeaderRowStyled, TitleStyled } from './styled';

const Banner: React.FC = () => {
  const { search, handleSearchInput } = useFilters();
  const navigate = useNavigate();

  const addMovieHandler = () => {
    navigate('/new');
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
    </>
  )
}

export default Banner;
