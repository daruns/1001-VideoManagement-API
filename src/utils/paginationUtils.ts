import { PaginationInterface } from '../interfaces/pagination.interface';
import { PaginationDto } from '../dtos/paginationDto';

export function paginate<T>(items: T[], paginationDto: PaginationDto): PaginationInterface {
  const page = paginationDto.page || 1;
  const limit = paginationDto.limit || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    page,
    limit,
    total: items.length,
    data: items.slice(startIndex, endIndex)
  };
}