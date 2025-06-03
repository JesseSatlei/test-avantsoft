import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('products')
@Unique(['sku'])
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('float')
  price: number;

  @Column()
  sku: string;
}
