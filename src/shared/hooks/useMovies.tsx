import { useQuery } from '@tanstack/react-query';

import movieService, { GetMoviesParams } from '../../services/movieService';
import { Movie } from '../../interfaces/movie.interface';

export const useMovies = (params?: GetMoviesParams) => {
  const moviesQuery = useQuery<Movie[], Error>({
    queryKey: ['movies', params],
    queryFn: () => movieService.getMovies(params),
  });
  const { data: movies, isLoading, error } = moviesQuery;

  return { movies, isLoading, error };
};
