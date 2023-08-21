import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('/api/reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  // 기능1: 리뷰 등록
  @Post()
  @HttpCode(201)
  async create(@Body() createReviewDto: CreateReviewDto) {
    await this.reviewService.create(createReviewDto);
  }
}
