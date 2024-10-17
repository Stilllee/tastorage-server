import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipeService {
  constructor(private prisma: PrismaService) {}

  async findAllRecipes() {
    return await this.prisma.recipe.findMany();
  }

  async searchRecipes(q?: string) {
    const searchText = q.replace(/\s+/g, '');
    return await this.prisma.recipe.findMany({
      where: {
        OR: [
          {
            title: { contains: searchText, mode: 'insensitive' },
          },
          {
            ingredient: { has: searchText },
          },
        ],
      },
    });
  }
}
