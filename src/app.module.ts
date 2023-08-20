import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './modules/movie/entities/movie.entity';
import { MoviesModule } from './modules/movie/movies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'hackathon',
      password: '1012',
      database: 'hackathondb',
      entities: [Movie],
      synchronize: true,
      logging: true,
    }),
    MoviesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
