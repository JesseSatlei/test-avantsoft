import { Provider } from '@nestjs/common';
import { ProductRepository } from '../domain/repositories/product.repository';
import { TypeOrmProductRepository } from './database/product.typeorm.repository';

export const ProductRepositoryProvider: Provider = {
  provide: ProductRepository,
  useClass: TypeOrmProductRepository,
};
