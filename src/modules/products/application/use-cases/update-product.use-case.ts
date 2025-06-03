import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';

@Injectable()
export class UpdateProductUseCase {
  constructor(private readonly repository: ProductRepository) {}

  async execute(
    id: number,
    data: Partial<{ name: string; price: number; sku: string }>,
  ) {
    return this.repository.update(id, data);
  }
}
