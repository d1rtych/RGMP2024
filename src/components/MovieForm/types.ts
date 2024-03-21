import { Movie, MovieFormData } from '../../interfaces/movie.interface';

export type MovieFormProps = {
  initialMovie?: Movie,
  onSubmit: (movie: MovieFormData) => void,
}
