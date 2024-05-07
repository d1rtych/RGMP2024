import { Movie } from '../../interfaces/movie.interface';

export type MovieFormProps = {
  initialMovie?: Movie,
  onSubmit: (movie: Movie) => void,
}
