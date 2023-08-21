import { Genre } from '../enums/movie.genre.enum';

export class CreateMovieDto {
  title: string;
  description: string;
  genre: Genre;
  isShowing: boolean;
  releaseDate: Date;
  endDate: Date;
}
