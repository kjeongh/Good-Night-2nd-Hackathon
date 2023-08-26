import { Review } from '../review.entity';

export class GetReviewDto {
  movieId: number;
  rating: number;
  content: string;

  public static of(entity: Review): GetReviewDto {
    const resDto = new GetReviewDto();

    resDto.movieId = entity.movieId;
    resDto.rating = entity.rating;
    resDto.content = entity.content;

    return resDto;
  }
}
