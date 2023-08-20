import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieService } from './movie.service';
import { Module } from '@nestjs/common';
import { MovieController } from './entities/movie.controller';
import { Movie } from './entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MovieService],
  controllers: [MovieController],
})
export class MoviesModule {}
