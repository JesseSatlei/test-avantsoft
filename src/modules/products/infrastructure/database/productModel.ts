import { Entity, PrimaryGeneratedColumn, Column, Unique } from 'typeorm';

@Entity('products')
@Unique(['sku'])
export class ProductModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;

  @Column({ type: 'varchar', length: 100 })
  sku: string;
}
