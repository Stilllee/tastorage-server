import { Injectable, NotFoundException } from '@nestjs/common';

import { CreateRecipeDto } from './dto/create-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateRecipeDto } from './dto/update-recipe.dto';

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

  async findOneRecipe(id: number) {
    const recipe = await this.prisma.recipe.findUnique({
      where: {
        id,
      },
    });
    if (!recipe) {
      throw new NotFoundException(`${id}번 레시피는 존재하지 않습니다.`);
    }
    return recipe;
  }

  async createRecipe(createRecipeDto: CreateRecipeDto) {
    return await this.prisma.recipe.create({
      data: createRecipeDto,
    });
  }

  async updateRecipe(id: number, updateRecipeDto: UpdateRecipeDto) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });
    if (!recipe) {
      throw new NotFoundException(`${id}번 레시피는 존재하지 않습니다.`);
    }
    return await this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }
}
