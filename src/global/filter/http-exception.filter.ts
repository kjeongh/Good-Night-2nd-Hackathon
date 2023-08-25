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

@Catch()
@Injectable()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly log = new Logger(GlobalExceptionFilter.name, {
    timestamp: true,
  });
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = (exception as any).message;
    let code = 'HttpException';

    console.log(exception);

    switch (exception.constructor) {
      case HttpException:
        status = (exception as HttpException).getStatus();
        break;

      case QueryFailedError:
        status = HttpStatus.UNPROCESSABLE_ENTITY;
        message = (exception as QueryFailedError).message;
        code = (exception as any).code;
        break;

      case EntityNotFoundError:
        status = HttpStatus.NOT_FOUND;
        message = (exception as EntityNotFoundError).message;
        code = (exception as any).code;
        break;

      case NotFoundException:
        status = HttpStatus.NOT_FOUND;
        message = (exception as NotFoundException).message;
        code = (exception as any).code;
        break;

      case BadRequestException:
        status = HttpStatus.BAD_REQUEST;
        message = (exception as any).message;
        code = (exception as any).code;
        break;

      default:
        status = HttpStatus.INTERNAL_SERVER_ERROR;
    }

    this.log.error(`[${status}] | exception`);

    response.status(status).json({
      statusCode: status,
      message: (exception as any).message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
