import { Injectable, ConflictException } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { CreateProductDto } from '../dtos/create-product.dto';
import { Product } from '../../domain/entities/product.entity';

@Injectable()
export class CreateProductUseCase {
  constructor(private readonly repository: ProductRepository) {}

  async execute(dto: CreateProductDto): Promise<Product> {
    const exists = await this.repository.findBySKU(dto.sku);
    if (exists) throw new ConflictException('SKU must be unique');
    const product = new Product(0, dto.name, dto.price, dto.sku);
    return this.repository.create(product);
  }
}
