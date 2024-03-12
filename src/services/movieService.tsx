import axios from 'axios';

import { Movie } from '../interfaces/movie.interface';

const apiClient = axios.create({
  baseURL: 'http://localhost:4000', // Базовый URL вашего API
});

const movieService = {
  getMovies: async (): Promise<Movie[]> => {
    const response = await apiClient.get<{
      data: Movie[]
    }>('/movies');
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

  updateMovieById: async (id: string, movieData: Movie): Promise<Movie> => {
    const response = await apiClient.put(`/movies/${id}`, movieData);
    return response.data;
  },

  deleteMovieById: async (id: string): Promise<void> => {
    await apiClient.delete(`/movies/${id}`);
  },
};

export default movieService;
