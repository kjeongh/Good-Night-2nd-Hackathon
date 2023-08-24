import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { DateBase } from '../../../common/base.entity';
import { Movie } from '../../movie/entities/movie.entity';
import { GetMovieDto } from '../../movie/dto/get-movie.dto';
import { GetReviewDto } from '../dto/get-review.dto';

@Entity('reviews')
export class Review extends DateBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 2, scale: 1 })
  rating: number;

  @Column()
  content: string;

  @ManyToOne(() => Movie, (movie) => movie.reviews)
  @JoinColumn({ name: 'movieId', referencedColumnName: 'id' })
  movie: Movie;

  @Column()
  @RelationId((review: Review) => review.movie)
  movieId: number;
}
