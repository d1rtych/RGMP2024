import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Confirmation from '../Confirmation/Confirmation';
import { MovieTileProps } from './types';
import { MovieTileStyled } from './styled';
import { MovieActions } from '../../shared/enums';

const MovieTile: React.FC<MovieTileProps> = ({ movie }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleMenuItemSelect = (action: string) => {
    setShowMenu(false);

    switch (action) {
      case MovieActions.Edit:
        navigate(`/movie/${movie.id}/edit`);
        break;
      case MovieActions.Delete:
        setShowDeleteMovieModal(true);
        break;
      default:
        break;
    }
  };

  const onConfirm = () => {
    setShowDeleteMovieModal(false)
  }

  return (
    <MovieTileStyled>
      <span className="movie-menu" onClick={handleMenuClick}>...</span>
      {showMenu && (
        <div className='movie-menu__bar'>
          <div className="movie-menu__close">
            <span onClick={handleMenuClick}>X</span>
          </div>
          <p className='movie-menu__item' onClick={(event) => {
            event.stopPropagation();
            handleMenuItemSelect(MovieActions.Edit);
          }}>Edit</p>
          <p className='movie-menu__item' onClick={(event) => {
            event.stopPropagation();
            handleMenuItemSelect(MovieActions.Delete);
          }}>Delete</p>
        </div>
      )}

      {showDeleteMovieModal && (
        <Modal handleClose={() => {setShowDeleteMovieModal(false)}}>
          <Confirmation onConfirm={onConfirm} />
        </Modal>
      )}

      <Link to={{
        pathname: `/movie/${movie.id}`,
        search: searchParams.toString(), // Add existing query parameters
      }} className="movie-poster" data-testid="movie-tile">
        <img src={`${movie.poster_path}`} alt={movie.title}/>
      </Link>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-year">{new Date(movie.release_date).getFullYear()}</span>
      </div>

      <p className='movie-genres'>{movie.genres.join(', ')}</p>
    </MovieTileStyled>
  );
};

export default MovieTile;
