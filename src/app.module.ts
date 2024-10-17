import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [PrismaModule, RecipeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
