import { Review } from '../entities/review.entity';
import { Movie } from '../../movie/entities/movie.entity';

export class CreateReviewDto {
  movieId: number;
  rating: number;
  content: string;

  public static toEntity(
    createReviewDto: CreateReviewDto,
    movie: Movie,
  ): Review {
    const review = new Review();
    review.movie = movie;
    review.rating = createReviewDto.rating;
    review.content = createReviewDto.content;

    return review;
  }
}
