import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { DataSource } from 'typeorm';
import { MovieRepository } from '../movie/movie.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Review])],
  providers: [
    ReviewService,
    {
      provide: 'MOVIE_REPOSITORY',
      useFactory: (dataSource: DataSource) => new MovieRepository(dataSource),
      inject: [DataSource],
    },
  ],
  controllers: [ReviewController],
})
export class ReviewsModule {}
