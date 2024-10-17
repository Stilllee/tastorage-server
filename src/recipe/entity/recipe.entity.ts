import { ApiProperty } from '@nestjs/swagger';

export class RecipeEntity {
  @ApiProperty({
    description: '레시피 ID',
  })
  id: number;

  @ApiProperty({
    description: '레시피 제목',
  })
  title: string;

  @ApiProperty({
    description: '분량',
  })
  servings: number;

  @ApiProperty({
    description: '재료',
    type: [String],
  })
  ingredient: string[];

  @ApiProperty({
    description: '조리 방법',
  })
  directions: string;
}
