import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(userId: number, username: string): Promise<string> {
    const payload: JwtPayload = { sub: userId, username };
    return this.jwtService.sign(payload);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    // Replace this with your own user validation logic
    // For simplicity, we assume a user exists with the provided ID
    const user = {
      id: payload.sub,
      username: payload.username,
    };
    return user;
  }
}

