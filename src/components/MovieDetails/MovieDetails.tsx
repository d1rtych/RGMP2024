import React, { useContext } from 'react';

import { MovieContext } from '../../shared/contexts/MovieContext';
import { formatRuntime } from '../../utils/utils';
import { MovieDetailsStyled } from './styled';

const MovieDetails: React.FC = () => {
  const { selectedMovie } = useContext(MovieContext);

  return (
    <>
      {selectedMovie && (
        <MovieDetailsStyled>
          <img className="movie-poster" src={selectedMovie.poster_path} alt={selectedMovie.title}/>
          <div className="movie-details">
            <div className="movie-details__row">
              <h2 className="movie-details__title">{selectedMovie.title}</h2>
              <div className="movie-details__vote">
                <span>{selectedMovie.vote_average}</span>
              </div>
            </div>

            <div className="movie-details__genre">
              <span>{selectedMovie.genres.join(', ')}</span>
            </div>

            <div className="movie-details__row">
              <span className="movie-details__release-date">{selectedMovie.release_date}</span>
              <span className="movie-details__runtime">{formatRuntime(selectedMovie.runtime)}</span>
            </div>

            <p className="movie-details__description">{selectedMovie.overview}</p>
          </div>
        </MovieDetailsStyled>)}
    </>
  );
};

export default MovieDetails;
