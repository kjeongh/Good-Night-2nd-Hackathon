import { Genre } from '../enums/movie.genre.enum';
import {
  IsBoolean,
  IsDate,
  IsDateString,
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

  @IsDateString()
  @IsOptional()
  releaseDate?: Date;

  @IsDateString()
  @IsOptional()
  endDate?: Date;
}
