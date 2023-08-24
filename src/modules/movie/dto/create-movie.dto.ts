import { Genre } from '../enums/movie.genre.enum';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Movie } from '../entities/movie.entity';

export class CreateMovieDto {
  @IsString()
  title!: string;

  @IsString()
  description!: string;

  @IsEnum(Genre)
  genre!: Genre;

  @IsBoolean()
  isShowing!: boolean;

  @IsDate()
  releaseDate!: Date;

  @IsDate()
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
