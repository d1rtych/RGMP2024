import axios from 'axios';

import { Movie } from '../interfaces/movie.interface';

export interface GetMoviesParams {
  sortBy?: string;
  sortOrder?: string;
  search?: string;
  searchBy?: string;
  filter?: string;
  offset?: string;
  limit?: string;
}

export interface MovieService {
  getMovies: (params?: GetMoviesParams) => Promise<Movie[]>;
  getMovieById: (id: string) => Promise<Movie>;
  createMovie: (movieData: Movie) => Promise<Movie>;
  updateMovie: (movieData: Movie) => Promise<Movie>;
  deleteMovieById: (id: string) => void;
}

const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
});

const movieService: MovieService = {
  getMovies: async (params?: GetMoviesParams): Promise<Movie[]> => {
    const response = await apiClient.get<{
      data: Movie[]
    }>('/movies', {
      params,
    });
    return response.data.data;
  },

  getMovieById: async (id: string): Promise<Movie> => {
    const response = await apiClient.get(`/movies/${id}`);
    return response.data;
  },

  createMovie: async (movieData: Movie): Promise<Movie> => {
    const response = await apiClient.post('/movies', movieData);
    return response.data;
  },

  updateMovie: async (movieData: Movie): Promise<Movie> => {
    const response = await apiClient.put(`/movies`, movieData);
    return response.data;
  },

  deleteMovieById: async (id: string): Promise<void> => {
    await apiClient.delete(`/movies/${id}`);
  },
};

export default movieService;
