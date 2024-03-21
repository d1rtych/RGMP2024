import React, { useContext, useState } from 'react';

import Modal from '../Modal/Modal';
import MovieForm from '../MovieForm/MovieForm';
import Confirmation from '../Confirmation/Confirmation';
import { MovieTileProps } from './types';
import { MovieTileStyled } from './styled';
import { MovieContext } from '../../shared/contexts/MovieContext';
import { MovieActions } from '../../shared/enums';
import { MovieFormData } from '../../interfaces/movie.interface';

const MovieTile: React.FC<MovieTileProps> = ({ movie }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showAddMovieModal, setShowAddMovieModal] = useState<boolean>(false);
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState<boolean>(false);
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleMenuItemSelect = (action: string) => {
    setShowMenu(false);

    switch (action) {
      case MovieActions.Edit:
        setShowAddMovieModal(true);
        break;
      case MovieActions.Delete:
        setShowDeleteMovieModal(true);
        break;
      default:
        break;
    }
  };

  const handleTileClick = () => {
    const contextValue = selectedMovie?.id === movie.id ? null : movie
    setSelectedMovie(contextValue);
  };

  const onMovieFormSubmitted = (movie: MovieFormData) => {
    console.log(movie);
    setShowAddMovieModal(false);
  }

  const onConfirm = () => {
    setShowDeleteMovieModal(false)
  }

  return (
    <MovieTileStyled>
      <div className="movie-poster" data-testid="movie-tile" onClick={handleTileClick}>
        <img src={`${movie.poster_path}`} alt={movie.title}/>

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
      </div>

      {showAddMovieModal && (
        <Modal handleClose={() => {setShowAddMovieModal(false)}}>
          <MovieForm initialMovie={movie} onSubmit={onMovieFormSubmitted} />
        </Modal>
      )}

      {showDeleteMovieModal && (
        <Modal handleClose={() => {setShowDeleteMovieModal(false)}}>
          <Confirmation onConfirm={onConfirm} />
        </Modal>
      )}

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-year">{new Date(movie.release_date).getFullYear()}</span>
      </div>

      <p className='movie-genres'>{movie.genres.join(', ')}</p>
    </MovieTileStyled>
  );
};

export default MovieTile;
