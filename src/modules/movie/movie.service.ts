import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { GetMovieResDto } from './dto/get-movie.dto';
import { Genre } from './enums/movie.genre.enum';
import { MovieRepository } from './movie.repository';
import { count } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: MovieRepository,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<any> {
    try {
      return await this.movieRepository.save(createMovieDto);
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async delete(id: number): Promise<any> {
    try {
      await this.movieRepository.softDelete({ id });
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<any> {
    try {
      const movie = await this.movieRepository.findOneByOrFail({ id });
      const updatedMovie = { ...movie, ...updateMovieDto };

      return await this.movieRepository.save(updatedMovie);
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async get(id: number): Promise<GetMovieResDto> {
    try {
      const movie = await this.movieRepository.findOneByOrFail({ id });

      return Movie.toDto(movie);
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async getList(genre: string, isShowing: boolean): Promise<any> {
    try {
      const [movies, count] = await this.movieRepository.findAndCountBy({
        genre: genre as any,
        isShowing: (isShowing ? 1 : 0) as any,
      });
      const movieInfoList = movies.map((movie) => Movie.toDto(movie));

      return { count, movieInfoList };
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async getListPage(): Promise<any> {
    try {
      return await this.movieRepository.getReviewList();
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }
}
