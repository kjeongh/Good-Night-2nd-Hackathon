import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { DateBase } from '../../../common/base.entity';
import { Genre } from '../constants/movie.genre.enum';

@Entity('movies')
export class Movie extends DateBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    nullable: false,
  })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({
    type: 'enum',
    enum: Genre,
    nullable: false,
  })
  genre: Genre;

  @Column({
    default: true,
    nullable: false,
  })
  isShowing: boolean;

  @Column({ nullable: false })
  releaseDate: Date;

  @Column({ nullable: false })
  endDate: Date;
}
