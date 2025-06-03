import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductRepository } from '../../domain/repositories/product.repository';

@Injectable()
export class GetProductUseCase {
  constructor(private readonly repository: ProductRepository) {}

  async execute(id: number) {
    const p = await this.repository.findById(id);
    if (!p) throw new NotFoundException();
    return {
      ...p,
      missingLetter: this.getMissingLetter(p.name),
    };
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
