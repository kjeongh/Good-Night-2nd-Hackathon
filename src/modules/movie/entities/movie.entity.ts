import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { DateBase } from '../../../common/base.entity';
import { Genre } from '../enums/movie.genre.enum';
import { GetMovieDto } from '../dto/get-movie.dto';
import { Review } from '../../review/entities/review.entity';
import { UpdateMovieDto } from '../dto/update-movie.dto';

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

  @OneToMany(() => Review, (review) => review.movie)
  reviews: Review[];
  public update(updateMovieDto: Partial<UpdateMovieDto>) {
    for (const key in updateMovieDto) {
      this[key] = updateMovieDto[key];
    }
  }
}
