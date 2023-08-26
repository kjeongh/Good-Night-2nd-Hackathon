import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import {
  GlobalExceptionFilter,
  ValidationExceptionFilter,
} from './global/filter/http-exception.filter';
import { BadRequestException, Logger, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const log = new Logger(GlobalExceptionFilter.name, {
    timestamp: true,
  });

  // exception handler 설정
  app.useGlobalFilters(new ValidationExceptionFilter());
  app.useGlobalFilters(new GlobalExceptionFilter());

  // validator 설정
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: {
        target: true,
        value: true,
      },
    }),
  );

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('Good-Night-2nd-Hackathon: NestJS')
    .setDescription('goot-night-2nd-hackathon NestJS sample')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(8080);
}
bootstrap();
