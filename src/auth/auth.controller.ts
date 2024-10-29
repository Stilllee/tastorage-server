import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('admin-login')
  @ApiOperation({ summary: '관리자 로그인' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        password: {
          type: 'string',
          description: '관리자 비밀번호',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: '로그인 성공',
    schema: {
      type: 'object',
      properties: {
        access_token: {
          type: 'string',
          description: 'JWT 토큰',
        },
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: '잘못된 관리자 비밀번호',
  })
  adminLogin(@Body('password') password: string) {
    if (this.authService.validateAdminPassword(password)) {
      return this.authService.login();
    }
    throw new UnauthorizedException('잘못된 관리자 비밀번호');
  }
}
