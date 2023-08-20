import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MovieService {
  // repository
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async create(createMovieDto: CreateMovieDto): Promise<any> {
    //TODO: any?
    try {
      return await this.movieRepository.save(createMovieDto);
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
}
