import { Genre } from '../enums/movie.genre.enum';
import { Movie } from '../movie.entity';

export class GetMovieDto {
  title: string;
  description: string;
  genre: Genre;
  isShowing: boolean;
  releaseDate: Date;
  endDate: Date;

  public static of(entity: Movie): GetMovieDto {
    const resDto = new GetMovieDto();

    resDto.title = entity.title;
    resDto.description = entity.description;
    resDto.genre = entity.genre;
    resDto.isShowing = entity.isShowing;
    resDto.releaseDate = entity.releaseDate;
    resDto.endDate = entity.endDate;

    return resDto;
  }
}
