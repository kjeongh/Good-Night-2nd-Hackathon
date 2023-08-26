import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './movie.service';
import { Module, ValidationPipe } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { Movie } from './movie.entity';
import { DataSource } from 'typeorm';
import { MovieRepository } from './movie.repository';
import { APP_PIPE } from '@nestjs/core';

@Module({
  providers: [
    MovieService,
    {
      provide: 'MOVIE_REPOSITORY',
      useFactory: (dataSource: DataSource) => new MovieRepository(dataSource),
      inject: [DataSource],
    },
  ],
  controllers: [MovieController],
})
export class MoviesModule {}
