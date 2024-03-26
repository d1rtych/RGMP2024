import { useState, useEffect } from 'react';

import { Movie } from '../../interfaces/movie.interface';
import movieService from '../../services/movieService';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    movieService.getMovies()
      .then((data) => {
        setMovies(data);
      })
      .catch(error => {
        console.error(error);
      })
  }, []);

  return { movies };
}
