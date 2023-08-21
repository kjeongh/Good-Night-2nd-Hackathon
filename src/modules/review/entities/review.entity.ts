import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DateBase } from '../../../common/base.entity';
import { Movie } from '../../movie/entities/movie.entity';
import { GetMovieResDto } from '../../movie/dto/get-movie.dto';
import { GetReviewResDto } from '../dto/get-review.dto';

@Entity('reviews')
export class Review extends DateBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('decimal', { precision: 2, scale: 1 })
  rating: number;

  @Column({ nullable: false })
  content: string;

  @ManyToOne(() => Movie, (movie) => movie.reviews)
  movie: Movie;

  public toDto(): GetReviewResDto {
    const resDto = new GetReviewResDto();

    resDto.movieId = this.movie ? this.movie.id : null;
    resDto.rating = this.rating;
    resDto.content = this.content;

    return resDto;
  }
}
