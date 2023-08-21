import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { GetMovieResDto } from './dto/get-movie.dto';
import { Paginated } from 'nestjs-paginate';

@Controller('/api/movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  // 기능1: 영화 등록
  @Post()
  @HttpCode(201)
  async create(@Body() createMovieDto: CreateMovieDto) {
    await this.movieService.create(createMovieDto);
  }

  // 기능2: 영화 삭제
  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id') id: number) {
    await this.movieService.delete(id);
  }

  // 기능3: 영화 수정
  @Patch('/:id')
  @HttpCode(200)
  async update(
    @Param('id') id: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return await this.movieService.update(id, updateMovieDto);
  }

  // 기능4: 영화 단일 조회
  @Get('/:id')
  @HttpCode(200)
  async get(@Param('id') id: number): Promise<GetMovieResDto> {
    return await this.movieService.get(id);
  }

  // 기능 5: 영화 목록 조회
  @Get()
  @HttpCode(200)
  async getList(
    @Query('genre') genre: string,
    @Query('is-showing') isShowing: boolean,
  ): Promise<any> {
    return await this.movieService.getList(genre, isShowing);
  }

  // 기능 5: 영화 목록 평점순 조회 (페이지네이션)
  // @Get('/rating')
  // @HttpCode(200)
  // async getListPage(
  //   @Query('limit') limit: number,
  //   @Query('page') page: number,
  // ): Promise<Paginated<GetMovieResDto>> {
  //   return await this.movieService.getListPage(limit, page);
  // }
}
