import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

import { useMovie } from '../../shared/hooks/useMovie';
import { formatRuntime } from '../../utils/utils';
import { MovieDetailsStyled } from './styled';
import Logo from '../Logo/Logo';

const MovieDetails: React.FC = () => {
  const { movieId } = useParams();
  const { data: movie, isLoading, error } = useMovie(movieId!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!movie) return <div>No movie found</div>;

  return (
    <>
      {movie && (
        <MovieDetailsStyled>
          <Logo />
          <div className="movie-container">
            <img className="movie-poster" src={movie.poster_path} alt={movie.title}/>
            <div className="movie-details">
              <div className="movie-details__row">
                <h2 className="movie-details__title">{movie.title}</h2>
                <div className="movie-details__vote">
                  <span>{movie.vote_average}</span>
                </div>
              </div>

              <div className="movie-details__genre">
                <span>{movie.genres.join(', ')}</span>
              </div>

              <div className="movie-details__row">
                <span className="movie-details__release-date">{movie.release_date}</span>
                <span className="movie-details__runtime">{formatRuntime(movie.runtime)}</span>
              </div>

              <p className="movie-details__description">{movie.overview}</p>
            </div>
          </div>
          <Outlet />
        </MovieDetailsStyled>)}
    </>
  );
};

export default MovieDetails;
