import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DateBase } from '../../../common/base.entity';
import { Movie } from '../../movie/entities/movie.entity';

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
}
