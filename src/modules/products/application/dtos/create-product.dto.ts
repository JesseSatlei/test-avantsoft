import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'O nome é obrigatório' })
  @IsString({ message: 'O nome deve ser uma string' })
  name: string;

  @IsPositive({ message: 'O preço deve ser maior que zero' })
  price: number;

  @IsNotEmpty({ message: 'O SKU é obrigatório' })
  @IsString({ message: 'O SKU deve ser uma string' })
  sku: string;
}
