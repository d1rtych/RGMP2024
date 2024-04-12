import { useQuery, UseQueryResult } from '@tanstack/react-query';

import movieService, { GetMoviesParams } from '../../services/movieService';
import { Movie } from '../../interfaces/movie.interface';

export const useMovies = (params?: GetMoviesParams): UseQueryResult<Movie[], Error> => {
  return useQuery<Movie[], Error>({
    queryKey: ['movies', params],
    queryFn: () => movieService.getMovies(params),
  });
};
