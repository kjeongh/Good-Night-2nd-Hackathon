import { Genre } from '../enums/movie.genre.enum';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(Genre)
  @IsOptional()
  genre?: Genre;

  @IsBoolean()
  @IsOptional()
  isShowing?: boolean;

  @IsDate()
  @IsOptional()
  releaseDate?: Date;

  @IsDate()
  @IsOptional()
  endDate?: Date;
}
