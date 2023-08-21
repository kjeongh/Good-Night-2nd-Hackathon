import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './movie.service';
import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { Movie } from './entities/movie.entity';
import { DataSource } from 'typeorm';
import { MovieRepository } from './movie.repository';

@Module({
  // imports: [TypeOrmModule.forFeature([Movie])],
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
