import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieRepository extends Repository<Movie> {
  constructor(dataSource: DataSource) {
    super(Movie, dataSource.createEntityManager());
  }

  async getMovieAvgList(): Promise<any> {
    return Promise.resolve(
      this.createQueryBuilder('movie')
        .leftJoin('reviews', 'review', 'review.movieId = movie.id')
        .select('movie.*')
        .addSelect('ROUND(AVG(review.rating), 2)', 'ratingAvg')
        .andWhere('review.rating IS NOT NULL')
        .groupBy('movie.id')
        .orderBy('ratingAvg', 'DESC')
        .getRawMany(),
    );
  }
}
