import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { RecipeService } from './recipe.service';

@ApiTags('레시피')
@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  @ApiOperation({
    summary: '모든 레시피 불러오기',
    description: '데이터베이스에 저장되어있는 모든 레시피를 불러옵니다.',
  })
  @ApiResponse({
    status: 200,
    description: '성공적으로 레시피 목록을 반환함',
    // type: RecipeEntity
  })
  findAll() {
    return this.recipeService.findAllRecipes();
  }
}
