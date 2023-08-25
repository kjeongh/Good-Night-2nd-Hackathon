import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { MovieRepository } from '../movie/movie.repository';
import { GetReviewDto } from './dto/get-review.dto';
import { count } from 'rxjs';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,

    @Inject('MOVIE_REPOSITORY')
    private movieRepository: MovieRepository,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    try {
      const isValidMovieId = await this.movieRepository.exist({
        where: { id: createReviewDto.movieId },
      });
      if (!isValidMovieId) console.log('test');

      const entity = CreateReviewDto.toEntity(createReviewDto);
      return Promise.resolve(await this.reviewRepository.save(entity));
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async getList(movieId: number, minRating: number): Promise<any> {
    try {
      const [reviewList, count] = await this.reviewRepository.findAndCount({
        where: { movieId: movieId, rating: MoreThanOrEqual(minRating) },
        order: { rating: 'DESC' },
      });

      const filteredReviewList = reviewList.map((review) =>
        GetReviewDto.of(review),
      );

      return Promise.resolve({ count, filteredReviewList });
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }
}
