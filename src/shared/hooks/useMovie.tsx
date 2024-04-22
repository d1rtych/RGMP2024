import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { Movie } from '../../interfaces/movie.interface';
import movieService from '../../services/movieService';

export const useMovie = (movieId: string): UseQueryResult<Movie, Error> => {
  return useQuery<Movie, Error>({
    queryKey: ['movie', movieId],
    queryFn: () => movieService.getMovieById(movieId),
    enabled: !!movieId,
  });
};
