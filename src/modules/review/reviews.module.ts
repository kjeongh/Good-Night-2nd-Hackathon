import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { Movie } from '../movie/entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Review, Movie])],
  providers: [ReviewService],
  controllers: [ReviewController],
})
export class ReviewsModule {}
