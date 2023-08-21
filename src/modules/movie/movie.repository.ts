import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieRepository extends Repository<Movie> {
  constructor(dataSource: DataSource) {
    super(Movie, dataSource.createEntityManager());
  }

  async getReviewList(): Promise<any> {
    return this.createQueryBuilder('movie')
      .leftJoin('movie.reviews', 'review')
      .addSelect('ROUND(AVG(review.rating), 2)', 'ratingAvg')
      .groupBy('movie.id')
      .orderBy('ratingAvg', 'DESC')
      .getRawMany();
  }
}
