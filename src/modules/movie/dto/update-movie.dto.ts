import { Genre } from '../constants/movie.genre.enum';

export class UpdateMovieDto {
  title: string;
  description: string;
  genre: Genre;
  isShowing: boolean;
  releaseDate: Date;
  endDate: Date;
}
