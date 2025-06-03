import { IsNotEmpty, IsPositive } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsPositive()
  price: number;

  @IsNotEmpty()
  sku: string;
}
