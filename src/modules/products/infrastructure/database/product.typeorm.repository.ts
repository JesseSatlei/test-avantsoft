import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { Product } from '../../domain/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductModel } from './productModel';

@Injectable()
export class TypeOrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(ProductModel)
    private repo: Repository<ProductModel>,
  ) {}

  private toDomain(model: ProductModel): Product {
    return new Product(model.id, model.name, model.price, model.sku);
  }

  async create(p: Product): Promise<Product> {
    const model = this.repo.create({
      name: p.name,
      price: p.price,
      sku: p.sku,
    });
    const saved = await this.repo.save(model);
    return this.toDomain(saved);
  }

  async findAll(): Promise<Product[]> {
    return (await this.repo.find()).map(this.toDomain);
  }

  async findById(id: number): Promise<Product | null> {
    const found = await this.repo.findOneBy({ id });
    return found ? this.toDomain(found) : null;
  }

  async findBySKU(sku: string): Promise<Product | null> {
    const found = await this.repo.findOneBy({ sku });
    return found ? this.toDomain(found) : null;
  }

  async update(id: number, data: Partial<Product>): Promise<Product> {
    await this.repo.update(id, data);
    const updated = await this.repo.findOneBy({ id });
    if (!updated) throw new NotFoundException();
    return this.toDomain(updated);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
