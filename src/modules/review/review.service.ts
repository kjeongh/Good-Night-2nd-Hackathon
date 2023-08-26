import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  EntityNotFoundError,
  IsNull,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { Review } from './review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { MovieRepository } from '../movie/movie.repository';
import { GetReviewDto } from './dto/get-review.dto';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,

    @Inject('MOVIE_REPOSITORY')
    private movieRepository: MovieRepository,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const isValidMovieId = await this.movieRepository.exist({
      where: { id: createReviewDto.movieId, deletedAt: IsNull() },
    });
    if (!isValidMovieId) throw new NotFoundException('movieId is invalid');

    const entity = CreateReviewDto.toEntity(createReviewDto);
    return Promise.resolve(await this.reviewRepository.save(entity));
  }

  async getList(movieId: number, minRating: number): Promise<any> {
    const [reviewList, count] = await this.reviewRepository.findAndCount({
      where: { movieId: movieId, rating: MoreThanOrEqual(minRating) },
      order: { rating: 'DESC' },
    });

    const filteredReviewList = reviewList.map((review) =>
      GetReviewDto.of(review),
    );

    return Promise.resolve({ count, filteredReviewList });
  }
}
