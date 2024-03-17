import React from 'react';

import { MovieContext } from '../shared/contexts/MovieContext';
import { mockMovie } from './mocks/movie.mock';

export const createWrapper = <T extends React.ReactNode>(children: T) => (
  <MovieContext.Provider value={{ selectedMovie: mockMovie, setSelectedMovie: () => {} }}>
    {children}
  </MovieContext.Provider>
);
