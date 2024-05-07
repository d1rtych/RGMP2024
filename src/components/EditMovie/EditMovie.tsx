import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Modal from '../Modal/Modal';
import MovieForm from '../MovieForm/MovieForm';
import { Movie } from '../../interfaces/movie.interface';
import { useMovie } from '../../shared/hooks/useMovie';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../services/queryClient';
import movieService from '../../services/movieService';

const EditMovie: React.FC = () => {
  const {movieId} = useParams();
  const {data: movie, isLoading} = useMovie(movieId!);
  const mutation = useMutation({
    mutationFn: (movie: Movie) => movieService.updateMovie(movie),
    onError: (error) => {
      console.error("Failed to update movie", error);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['movies', 'movie'] });
      navigate(-1);
    },
  });
  const navigate = useNavigate();

  const onMovieFormSubmitted = (movie: Movie) => {
    mutation.mutate(movie);
  }

  const onModalClosed = () => {
    navigate(-1);
  }

  return (
    <Modal handleClose={onModalClosed}>
      {isLoading
        ? <div>Loading data ...</div>
        : <MovieForm initialMovie={movie} onSubmit={onMovieFormSubmitted} />}
    </Modal>
  )
}

export default EditMovie;
