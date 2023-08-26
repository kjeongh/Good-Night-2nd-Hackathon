import { PaginatedResult } from './paginated-result';

export class Paginate<PaginationEntity> {
  public results: PaginationEntity[];
  public pageTotal: number;
  public total: number;

  constructor(paginationResult: PaginatedResult<PaginationEntity>) {
    this.results = paginationResult.results;
    this.pageTotal = paginationResult.results.length;
    this.total = paginationResult.total;
  }
}
