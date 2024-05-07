import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { movieSchema } from '../../shared/validation/movieSchema';
import { MovieFormProps } from './types';
import { Movie } from '../../interfaces/movie.interface';
import { GENRES } from '../../shared/constants';
import { FilledButton, StrokedButton } from '../Button';
import { emptyMovie } from '../../utils/emptyMovie';
import { MovieFormStyled } from './styled';

const MovieForm: React.FC<MovieFormProps> = ({ initialMovie = emptyMovie, onSubmit }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors}
  } = useForm<Movie>({
    resolver: zodResolver(movieSchema),
    defaultValues: {
      ...initialMovie,
      vote_average: initialMovie.vote_average.toString(),
      runtime: initialMovie.runtime.toString(),
    }
  });

  const handleFormSubmit = (data: Movie) => {
    onSubmit({
      ...initialMovie,
      ...data
    });
  };

  return (
    <MovieFormStyled onSubmit={handleSubmit(handleFormSubmit)}>
      <h2 className="title">{initialMovie.title ? 'Edit Movie' : 'Add Movie'}</h2>

      <div className="row">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <input type="text" className="form-control" id="title" {...field} />
            )}
          />
          {errors.title && <span className="error">{errors.title.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <Controller
            control={control}
            name="release_date"
            render={({ field }) => (
              <input type="date" className="form-control" id="releaseDate" {...field} />
            )}
          />
          {errors.release_date && <span className="error">{errors.release_date.message}</span>}
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label htmlFor="movieUrl">Movie URL</label>
          <Controller
            control={control}
            name="poster_path"
            render={({ field }) => (
              <input type="url" className="form-control" id="movieUrl" {...field} />
            )}
          />
          {errors.poster_path && <span className="error">{errors.poster_path.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <Controller
            control={control}
            name="vote_average"
            rules={{ required: 'Field is required' }}
            render={({ field }) => (
              <input
                type="number"
                className="form-control"
                id="rating"
                min={0}
                max={10}
                step={0.1}
                {...field} />
            )}
          />
          {errors.vote_average && <span className="error">{errors.vote_average.message}</span>}
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <Controller
            control={control}
            name="genres"
            render={({ field: { onChange, value, ref } }) => (
              <select
                multiple
                className="form-control"
                id="genre"
                ref={ref}
                value={value || []}
                onChange={e => {
                  const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
                  onChange(selectedOptions);
                }}
              >
                {GENRES.filter(genre => genre !== 'All').map(genre => (
                  <option key={genre} value={genre}>
                    {genre}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.genres && <span className="error">{errors.genres.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="runtime">Runtime (minutes)</label>
          <Controller
            control={control}
            name="runtime"
            render={({ field }) => <input type="number" className="form-control" id="runtime" {...field} />}
          />
          {errors.runtime && <span className="error">{errors.runtime.message}</span>}
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <Controller
            control={control}
            name="overview"
            render={({ field }) => <textarea rows={3} className="form-control" id="overview" {...field} />}
          />
          {errors.overview && <span className="error">{errors.overview.message}</span>}
        </div>
      </div>

      <div className="form-actions">
        <StrokedButton type="button" onClick={() => reset()}>Reset</StrokedButton>
        <FilledButton type="submit">Submit</FilledButton>
      </div>
    </MovieFormStyled>
  );
};

export default MovieForm;
