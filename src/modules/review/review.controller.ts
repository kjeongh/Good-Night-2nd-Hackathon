import { Body, Controller, Get, HttpCode, Post, Query } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('/api/reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  // 기능7: 리뷰 등록
  @Post()
  @HttpCode(201)
  async create(@Body() createReviewDto: CreateReviewDto) {
    await this.reviewService.create(createReviewDto);
  }

  // 기능8: 리뷰 목록 조회 (최신순, 평점 필터링)
  @Get()
  @HttpCode(200)
  async getList(
    @Query('movie-id') movieId: number,
    @Query('min-rating') minRating: number,
  ) {
    return await this.reviewService.getList(movieId, minRating);
  }
}
