import React, { createContext, useMemo, useState } from 'react';
import { Movie } from '../../interfaces/movie.interface';

interface MovieDetails {
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
}

export const MovieContext = createContext<MovieDetails>({
  selectedMovie: null,
  setSelectedMovie: () => {},
});

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const value: MovieDetails = useMemo<MovieDetails>(() => ({
    selectedMovie,
    setSelectedMovie,
  }), [selectedMovie, setSelectedMovie]);

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
