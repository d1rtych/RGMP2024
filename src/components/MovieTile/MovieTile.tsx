import React, { useContext, useState } from 'react';

import { MovieTileProps } from './types';
import { MovieTileStyled } from './styled';
import { MovieContext } from '../../shared/contexts/MovieContext';

const MovieTile: React.FC<MovieTileProps> = ({ movie }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { selectedMovie, setSelectedMovie } = useContext(MovieContext);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setShowMenu(!showMenu);
  };

  const handleMenuItemSelect = (action: string) => {
    console.log(action);
    setShowMenu(false);
  };

  const handleTileClick = () => {
    const contextValue = selectedMovie?.id === movie.id ? null : movie
    setSelectedMovie(contextValue);
  };

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
              handleMenuItemSelect('EDIT');
            }}>Edit</p>
            <p className='movie-menu__item' onClick={(event) => {
              event.stopPropagation();
              handleMenuItemSelect('DELETE');
            }}>Delete</p>
          </div>
        )}
      </div>

      <div className="movie-info">
        <h3 className="movie-title">{movie.title}</h3>
        <span className="movie-year">{new Date(movie.release_date).getFullYear()}</span>
      </div>

      <p className='movie-genres'>{movie.genres.join(', ')}</p>
    </MovieTileStyled>
  );
};

export default MovieTile;
