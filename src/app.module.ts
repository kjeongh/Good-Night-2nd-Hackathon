import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './modules/movie/entities/movie.entity';
import { MoviesModule } from './modules/movie/movies.module';
import { MysqlModule } from './database/db-mysql.module';
import { ReviewsModule } from './modules/review/reviews.module';

@Module({
  imports: [MysqlModule, MoviesModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
