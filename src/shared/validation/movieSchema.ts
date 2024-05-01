import { z } from 'zod';

export const movieSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  release_date: z.string().refine((data) => {
    const inputDate = new Date(data);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return inputDate <= today;
  }, {
    message: "Release date cannot be in the future",
  }),
  poster_path: z.string().url('Please enter a valid URL'),
  vote_average: z.string()
    .transform((value) => parseFloat(value))
    .refine((value) => !isNaN(value) && value >= 0 && value <= 10, 'Rating must be between 0 and 10'),
  genres: z.array(z.string()).nonempty("You must select at least one genre"),
  runtime: z.string()
    .transform((value) => parseInt(value, 10))
    .refine((value) => !isNaN(value) && value >= 1, 'Runtime must be at least 1 minute'),
  overview: z.string().min(10, 'Overview must be at least 10 characters long'),
});
