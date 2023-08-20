import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { DateBase } from '../../../common/base.entity';
import { Genre } from '../constants/movie.genre.enum';

@Entity('movies')
export class Movie extends DateBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  title: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: Genre,
  })
  genre: Genre;

  @Column({
    default: true,
  })
  isShowing: boolean;

  @Column()
  releaseDate: Date;

  @Column()
  endDate: Date;
}
