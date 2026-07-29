import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

@Module({
  providers: [RecipeService, PrismaService],
  controllers: [RecipeController],
})
export class RecipeModule {}
