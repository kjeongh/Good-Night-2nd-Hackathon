export interface PaginatedResult<PaginationEntity> {
  results: PaginationEntity[];
  total: number;
  next?: string;
  previous?: string;
}
