import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

@Injectable()
@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly log = new Logger(GlobalExceptionFilter.name, {
    timestamp: true,
  });

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let status;
    let message = (exception as any).message || 'Internal Server Error';
    let code = (exception as any).code;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
    } else if (exception instanceof QueryFailedError) {
      status = HttpStatus.UNPROCESSABLE_ENTITY;
    } else if (exception instanceof EntityNotFoundError) {
      status = HttpStatus.NOT_FOUND;
    } else if (exception instanceof NotFoundException) {
      status = HttpStatus.NOT_FOUND;
    } else if (exception instanceof BadRequestException) {
      status = HttpStatus.BAD_REQUEST;
      message =
        (exception.getResponse() as any).message || 'Bad Request Exception'; // 변경된 부분
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    this.log.error(`[${status}] ${message} | Path: ${request.url}`);

    response.status(status).json({
      statusCode: status,
      message: message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
