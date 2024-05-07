import React from 'react';
import { useNavigate } from "react-router-dom";

import Modal from '../Modal/Modal';
import MovieForm from '../MovieForm/MovieForm';
import { Movie } from '../../interfaces/movie.interface';
import { emptyMovie } from '../../utils/emptyMovie';
import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../services/queryClient';
import movieService from '../../services/movieService';

const AddMovie: React.FC = () => {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (movie: Movie) => movieService.createMovie(movie),
    onError: (error) => {
      console.error("Failed to update movie", error);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['movie'] });
      navigate(-1);
    },
  });

  const onMovieFormSubmitted = (movie: Movie) => {
    const newMovie = {
      ...movie,
      tagline: 'Your tagline',
    }
    mutation.mutate(newMovie)
  }

  const onModalClosed = () => {
    navigate(-1);
  }

  return (
    <Modal handleClose={onModalClosed}>
      <MovieForm initialMovie={emptyMovie} onSubmit={onMovieFormSubmitted} />
    </Modal>
  )
}

export default AddMovie;
