import React, { useRef } from 'react';

import { MovieFormProps } from './types';
import { MovieFormData } from '../../interfaces/movie.interface';
import { GENRES } from '../../shared/constants';
import { MovieFormStyled } from './styled';
import { FilledButton, StrokedButton } from '../Button';

const MovieForm: React.FC<MovieFormProps> = ({ initialMovie = {}, onSubmit }) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const releaseDateRef = useRef<HTMLInputElement>(null);
  const movieUrlRef = useRef<HTMLInputElement>(null);
  const ratingRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLSelectElement>(null);
  // const genreRef = useRef<Select<{ value: string; label: string; }, true, GroupBase<{ value: string; label: string; }>>>(null);
  const runtimeRef = useRef<HTMLInputElement>(null);
  const overviewRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: MovieFormData = {
      title: titleRef.current?.value || '',
      release_date: releaseDateRef.current?.value || '',
      poster_path: movieUrlRef.current?.value || '',
      vote_average: parseFloat(ratingRef.current?.value || '0'),
      genres: Array.from(genreRef.current?.selectedOptions || []).map(option => option.value),
      runtime: parseInt(runtimeRef.current?.value || '0', 10),
      overview: overviewRef.current?.value || '',
    };
    onSubmit(data);
  };

  return (
    <MovieFormStyled onSubmit={handleSubmit}>
      <h2 className="title">{initialMovie.title ? 'Edit Movie' : 'Add Movie'}</h2>

      <div className="row">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            required
            type="text"
            className="form-control"
            id="title"
            ref={titleRef}
            defaultValue={initialMovie.title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            required
            type="date"
            className="form-control"
            id="releaseDate"
            ref={releaseDateRef}
            defaultValue={initialMovie.release_date}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label htmlFor="movieUrl">Movie URL</label>
          <input
            required
            type="url"
            className="form-control"
            id="movieUrl"
            ref={movieUrlRef}
            defaultValue={initialMovie.poster_path}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            required
            type="number"
            min={0}
            max={10}
            step={0.1}
            className="form-control"
            id="rating"
            ref={ratingRef}
            defaultValue={initialMovie.vote_average}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group">
          <label htmlFor="genre">Genre</label>
          <select
            required
            multiple
            className="form-control"
            id="genre"
            ref={genreRef}
            defaultValue={initialMovie.genres}
          >
            {GENRES.filter(genre => genre !== 'All').map(genre => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="runtime">Runtime (minutes)</label>
          <input
            required
            type="number"
            className="form-control"
            id="runtime"
            ref={runtimeRef}
            defaultValue={initialMovie.runtime}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group">
          <label htmlFor="overview">Overview</label>
          <textarea
            required
            className="form-control"
            id="overview"
            rows={3}
            ref={overviewRef}
            defaultValue={initialMovie.overview}
          />
        </div>
      </div>

      <div className="form-actions">
        <StrokedButton type="reset">Reset</StrokedButton>
        <FilledButton type="submit">Submit</FilledButton>
      </div>
    </MovieFormStyled>
  );
};

export default MovieForm;
