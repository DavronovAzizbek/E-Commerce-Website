import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesUserGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];
    if (!authHeader) {
      throw new UnauthorizedException('Authorization header missing');
    }

    const token = authHeader.split(' ')[1];
    try {
      const payload = this.jwtService.verify(token);
      if (payload.role !== 'user') {
        throw new UnauthorizedException(
          'Faqat foydalanuvchilarga natijalar yaratishga ruxsat beriladi',
        );
      }
      request.user = payload;
      return true;
    } catch (error) {
      throw new UnauthorizedException(error.message || 'Invalid access token');
    }
  }
}
