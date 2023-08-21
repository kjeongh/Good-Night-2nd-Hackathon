import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieRepository extends Repository<Movie> {
  constructor(dataSource: DataSource) {
    super(Movie, dataSource.createEntityManager());
  }

  // async getReviewList(movieId: number, minRating: number): Promise<any> {
  //   return await this.createQueryBuilder()
  //     .select('')
  //     .addSelect('AVG(rating)', 'ratingAvg')
  //     .where('movieId = :movieId', { movieId })
  //     .groupBy('movieId')
  //     .having(`ratingAvg >= :minRating`, { minRating })
  //     .orderBy('ratingAvg', 'DESC')
  //     .getRawMany();
  // }
}
