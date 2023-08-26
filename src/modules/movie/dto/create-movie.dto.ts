import { Genre } from '../enums/movie.genre.enum';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsString,
} from 'class-validator';
import { Movie } from '../movie.entity';

export class CreateMovieDto {
  @IsString({ message: 'invalid movie dto' })
  title!: string;

  @IsString()
  description!: string;

  @IsEnum(Genre)
  genre!: Genre;

  @IsBoolean()
  isShowing!: boolean;

  @IsDateString()
  releaseDate!: Date;

  @IsDateString()
  endDate!: Date;

  public static toEntity(createMovieDto: CreateMovieDto): Movie {
    const movie = new Movie();
    movie.title = createMovieDto.title;
    movie.description = createMovieDto.description;
    movie.genre = createMovieDto.genre;
    movie.isShowing = createMovieDto.isShowing;
    movie.releaseDate = createMovieDto.releaseDate;
    movie.endDate = createMovieDto.endDate;

    return movie;
  }
}
