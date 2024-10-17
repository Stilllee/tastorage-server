import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Controller, Get } from '@nestjs/common';

import { RecipeEntity } from './entity/recipe.entity';
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
  @ApiOkResponse({
    type: RecipeEntity,
    isArray: true,
  })
  findAll() {
    return this.recipeService.findAllRecipes();
  }
}
