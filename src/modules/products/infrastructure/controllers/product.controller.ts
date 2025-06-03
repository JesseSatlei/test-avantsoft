import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductUseCase } from '../../application/use-cases/create-product.use-case';
import { ListProductsUseCase } from '../../application/use-cases/list-products.use-case';
import { GetProductUseCase } from '../../application/use-cases/get-product.use-case';
import { UpdateProductUseCase } from '../../application/use-cases/update-product.use-case';
import { DeleteProductUseCase } from '../../application/use-cases/delete-product.use-case';
import { CreateProductDto } from '../../application/dtos/create-product.dto';

@Controller('products')
export class ProductController {
  constructor(
    private createProduct: CreateProductUseCase,
    private listProducts: ListProductsUseCase,
    private getProduct: GetProductUseCase,
    private updateProduct: UpdateProductUseCase,
    private deleteProduct: DeleteProductUseCase,
  ) {}

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.createProduct.execute(dto);
  }

  @Get()
  list() {
    return this.listProducts.execute();
  }

  @Get(':id')
  get(@Param('id', ParseIntPipe) id: number) {
    return this.getProduct.execute(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    return this.updateProduct.execute(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.deleteProduct.execute(id);
  }
}
