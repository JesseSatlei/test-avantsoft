import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModel } from './infrastructure/database/productModel';
import { ProductRepositoryProvider } from './infrastructure/providers';
import { CreateProductUseCase } from './application/use-cases/create-product.use-case';
import { ListProductsUseCase } from './application/use-cases/list-products.use-case';
import { GetProductUseCase } from './application/use-cases/get-product.use-case';
import { UpdateProductUseCase } from './application/use-cases/update-product.use-case';
import { DeleteProductUseCase } from './application/use-cases/delete-product.use-case';
import { ProductController } from './infrastructure/controllers/product.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ProductModel])],
  controllers: [ProductController],
  providers: [
    ProductRepositoryProvider,
    CreateProductUseCase,
    ListProductsUseCase,
    GetProductUseCase,
    UpdateProductUseCase,
    DeleteProductUseCase,
  ],
})
export class ProductsModule {}
