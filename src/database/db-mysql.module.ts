import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Movie } from '../modules/movie/entities/movie.entity';
import { Review } from '../modules/review/entities/review.entity';

@Module({
  //TODO: 환경변수 분리
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'hackathon',
      password: '1012',
      database: 'hackathondb',
      entities: [Movie, Review],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class MysqlModule {}
