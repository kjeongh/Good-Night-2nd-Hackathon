import { Review } from '../entities/review.entity';
import { Movie } from '../../movie/entities/movie.entity';
import { IsInt, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateReviewDto {
  @IsInt()
  movieId!: number;

  @IsInt()
  @Min(0)
  @Max(5)
  rating!: number;

  @IsString()
  content!: string;

  public static toEntity(createReviewDto: CreateReviewDto): Review {
    const review = new Review();
    review.movieId = createReviewDto.movieId;
    review.rating = createReviewDto.rating;
    review.content = createReviewDto.content;

    return review;
  }
}
