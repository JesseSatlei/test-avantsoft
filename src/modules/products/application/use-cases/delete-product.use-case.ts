import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';

@Injectable()
export class DeleteProductUseCase {
  constructor(private readonly repository: ProductRepository) {}

  async execute(id: number) {
    return this.repository.delete(id);
  }
}
