import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Controller, Get, Query } from '@nestjs/common';

import { RecipeService } from './recipe.service';
import { RecipeEntity } from './entity/recipe.entity';

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

  @Get('/search')
  @ApiOperation({
    summary: '레시피 검색하기',
    description: '제목과 재료를 기준으로 검색합니다.',
  })
  @ApiQuery({
    name: 'q',
    type: String,
    description: '레시피 검색',
    required: true,
  })
  @ApiOkResponse({
    type: RecipeEntity,
    isArray: true,
  })
  findSearchResult(@Query('q') q?: string) {
    return this.recipeService.searchRecipes(q);
  }
}
