import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './modules/movie/movie.entity';
import { MoviesModule } from './modules/movie/movies.module';
import { MysqlModule } from './database/db-mysql.module';
import { ReviewsModule } from './modules/review/reviews.module';
import { GlobalExceptionFilter } from './global/filter/http-exception.filter';
import { APP_FILTER, APP_PIPE } from '@nestjs/core';

@Module({
  imports: [MysqlModule, MoviesModule, ReviewsModule],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: GlobalExceptionFilter },
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
