import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { DateBase } from '../../../common/base.entity';
import { Genre } from '../constants/movie.genre.enum';
import { GetMovieResDto } from '../dto/get-movie.dto';

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

  public static toDto(entity: Movie): GetMovieResDto {
    const resDto = new GetMovieResDto();

    resDto.title = entity.title;
    resDto.description = entity.description;
    resDto.genre = entity.genre;
    resDto.isShowing = entity.isShowing;
    resDto.releaseDate = entity.releaseDate;
    resDto.endDate = entity.endDate;

    return resDto;
  }
}
