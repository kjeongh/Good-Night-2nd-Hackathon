import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThanOrEqual, Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { MovieRepository } from '../movie/movie.repository';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,

    @Inject('MOVIE_REPOSITORY')
    private movieRepository: MovieRepository,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<any> {
    try {
      const movie = await this.movieRepository.findOneByOrFail({
        id: createReviewDto.movieId,
      });
      const entity = CreateReviewDto.toEntity(createReviewDto, movie);
      return await this.reviewRepository.save(entity);
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }

  async getList(movieId: number, minRating: number): Promise<any> {
    try {
      const [reviewList, count] = await this.reviewRepository.findAndCount({
        where: { movie: { id: movieId }, rating: MoreThanOrEqual(minRating) },
        relations: ['movie'], //TODO: movie 로드 ?
      });

      const filteredReviewList = reviewList.map((review) => review.toDto());
      return { count, filteredReviewList };
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }
}
