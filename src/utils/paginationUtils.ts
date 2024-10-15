import { PaginationInterface } from '../interfaces/pagination.interface';

export function paginate<T>(items: T[], page: number, limit: number): PaginationInterface {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    page,
    limit,
    total: items.length,
    data: items.slice(startIndex, endIndex)
  };
}