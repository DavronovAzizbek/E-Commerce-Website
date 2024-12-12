import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Token is missing');
    }

    const [type, token] = authHeader.split(' ');
    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Token format is invalid');
    }

    try {
      const payload = this.jwtService.verify(token, {
        secret: process.env.SECRET_KEY,
      });
      request.user = payload;
      return true;
    } catch (error) {
      console.error('JWT verification error:', error);
      throw new UnauthorizedException('Token is invalid or expired');
    }
  }
}
