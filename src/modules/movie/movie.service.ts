import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { GetMovieDto } from './dto/get-movie.dto';
import { Genre } from './enums/movie.genre.enum';
import { MovieRepository } from './movie.repository';
import { async, count } from 'rxjs';

@Injectable()
export class MovieService {
  constructor(
    @Inject('MOVIE_REPOSITORY')
    private movieRepository: MovieRepository,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<Movie> {
    const entity = CreateMovieDto.toEntity(createMovieDto);
    return Promise.resolve(await this.movieRepository.save(entity));
  }

  async delete(id: number) {
    await this.movieRepository.softDelete({ id }); //TODO: notfound
  }

  async update(id: number, updateMovieDto: UpdateMovieDto): Promise<Movie> {
    try {
      const movie = await this.movieRepository.findOneByOrFail({ id });
      movie.update(updateMovieDto);

      return Promise.resolve(await this.movieRepository.save(movie));
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async get(id: number): Promise<GetMovieDto> {
    const movie = await this.movieRepository.findOneByOrFail({ id });

    return Promise.resolve(GetMovieDto.of(movie));
  }

  async getList(genre: Genre, isShowing: boolean): Promise<any> {
    try {
      const [movies, count] = await this.movieRepository.findAndCount({
        where: {
          genre,
          isShowing,
        },
      });
      const movieInfoList = movies.map((movie) => GetMovieDto.of(movie));

      return Promise.resolve({ count, movieInfoList });
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async getListPage(): Promise<any> {
    try {
      const movies = await this.movieRepository.getMovieAvgList();

      return Promise.resolve(movies);
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }
}
