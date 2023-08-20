import { Body, Controller, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { MovieService } from '../movie.service';
import { CreateMovieDto } from '../dto/create-movie.dto';
import { UpdateMovieResDto } from '../dto/update-movie.dto';

@Controller('/api/movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  // 기능1: 영화 등록
  @Post()
  @HttpCode(201)
  async create(@Body() createMovieDto: CreateMovieDto) {
    await this.movieService.create(createMovieDto);
  }

  // 기능2: 영화 수정
  // @Patch('/:id')
  // @HttpCode(200)
  // async update(@Param('id') id, @Body() updateMovieDto: UpdateMovieResDto) {
  //   return await this.movieService.update(+id, updateMovieDto);
  // }
}
