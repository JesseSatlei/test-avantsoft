import { Product } from '../entities/product.entity';

export abstract class ProductRepository {
  abstract create(product: Product): Promise<Product>;
  abstract findAll(): Promise<Product[]>;
  abstract findById(id: number): Promise<Product | null>;
  abstract findBySKU(sku: string): Promise<Product | null>;
  abstract update(id: number, product: Partial<Product>): Promise<Product>;
  abstract delete(id: number): Promise<void>;
}
