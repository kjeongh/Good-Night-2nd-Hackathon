import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Review } from './entities/review.entity';
import { CreateReviewDto } from './dto/create-review.dto';
import { Movie } from '../movie/entities/movie.entity';

@Injectable()
export class ReviewService {
  constructor(
    @InjectRepository(Review)
    private reviewRepository: Repository<Review>,

    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async create(createReviewDto: CreateReviewDto): Promise<any> {
    try {
      const movie = await this.movieRepository.findOneByOrFail({
        id: createReviewDto.movieId,
      });
      return await this.reviewRepository.save(
        CreateReviewDto.toEntity(createReviewDto, movie),
      );
    } catch (e) {
      console.log(e); //TODO: 에러핸들링
    }
  }
}
