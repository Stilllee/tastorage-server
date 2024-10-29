import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  validateAdminPassword(password: string): boolean {
    return password === process.env.ADMIN_PASSWORD;
  }

  login() {
    const payload = { role: 'admin' };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
