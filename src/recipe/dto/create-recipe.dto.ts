import { IsArray, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeDto {
  @ApiProperty({ description: '레시피 제목' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: '몇 인분' })
  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  servings: number;

  @ApiProperty({ description: '재료 목록' })
  @IsArray()
  @IsString({ each: true })
  ingredient: string[];

  @ApiProperty({ description: '조리 방법' })
  @IsString()
  @IsNotEmpty()
  directions: string;
}
