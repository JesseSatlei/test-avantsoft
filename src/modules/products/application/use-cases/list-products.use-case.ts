import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';

@Injectable()
export class ListProductsUseCase {
  constructor(private readonly repository: ProductRepository) {}

  async execute() {
    const list = await this.repository.findAll();
    return list
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((p) => ({
        ...p,
        missingLetter: this.getMissingLetter(p.name),
      }));
  }

  private getMissingLetter(name: string): string {
    const seen = new Set(name.toLowerCase().replace(/[^a-z]/g, ''));
    for (let i = 97; i <= 122; i++) {
      const letter = String.fromCharCode(i);
      if (!seen.has(letter)) return letter;
    }
    return '_';
  }
}
