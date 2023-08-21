import { Review } from '../entities/review.entity';
import { Movie } from '../../movie/entities/movie.entity';

export class CreateReviewDto {
  movieId: number;
  rating: number;
  content: string;

  public static toEntity(dto: CreateReviewDto, movie: Movie): Review {
    const review = new Review();
    review.movie = movie;
    review.rating = dto.rating;
    review.content = dto.content;

    return review;
  }
}
