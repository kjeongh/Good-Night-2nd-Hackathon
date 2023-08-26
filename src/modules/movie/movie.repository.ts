import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Movie } from './movie.entity';
import { take } from 'rxjs';

@Injectable()
export class MovieRepository extends Repository<Movie> {
  constructor(dataSource: DataSource) {
    super(Movie, dataSource.createEntityManager());
  }

  async getMovieAvgList({ take, page }): Promise<any> {
    return Promise.resolve(
      this.createQueryBuilder('movie')
        .leftJoin('reviews', 'review', 'review.movieId = movie.id')
        .select('movie.*')
        .addSelect('ROUND(AVG(review.rating), 2)', 'ratingAvg')
        .andWhere('movie.deletedAt IS NULL')
        .groupBy('movie.id')
        .orderBy('ratingAvg', 'DESC')
        .take(take)
        .skip(take * (page - 1))
        .getRawMany(),
    );
  }
}
