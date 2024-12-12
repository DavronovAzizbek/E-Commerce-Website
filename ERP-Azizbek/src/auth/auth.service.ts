import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async registerAdmin(createAuthDto: CreateAuthDto) {
    const existingUser = await this.userRepository.findOneBy({
      email: createAuthDto.email,
    });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = this.userRepository.create({
      fullName: createAuthDto.name,
      email: createAuthDto.email,
      password: await bcrypt.hash(createAuthDto.password, 10),
      role: 'admin',
    });
    await this.userRepository.save(user);
    return { message: 'Admin is successfully registered' };
  }

  async register(createAuthDto: CreateAuthDto) {
    const existingUser = await this.userRepository.findOneBy({
      email: createAuthDto.email,
    });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    const user = this.userRepository.create({
      fullName: createAuthDto.name,
      email: createAuthDto.email,
      password: await bcrypt.hash(createAuthDto.password, 10),
      role: 'user',
    });

    await this.userRepository.save(user);
    return { message: 'You are successfully registered' };
  }

  async login(loginDto: { email: string; password: string; role: string }) {
    const user = await this.userRepository.findOneBy({ email: loginDto.email });

    if (!user) {
      throw new NotFoundException('Foydalanuvchi topilmadi ❌');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Parol noto‘g‘ri ❌');
    }

    if (user.role !== loginDto.role) {
      throw new UnauthorizedException(
        `Role mos emas! Foydalanuvchi "${user.role}", lekin "${loginDto.role}" sifatida kirmoqchi bo'lyapti ❌`,
      );
    }

    const payload = { id: user.id, email: user.email, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '30d' });

    user.refreshToken = refreshToken;
    await this.userRepository.save(user);

    return {
      accessToken,
      refreshToken,
    };
  }

  async refreshAccessToken(
    refreshToken: string,
  ): Promise<{ accessToken: string; newRefreshToken: string }> {
    try {
      const payload = this.jwtService.verify(refreshToken);
      const user = await this.userRepository.findOneBy({ id: payload.id });

      if (!user || user.refreshToken !== refreshToken) {
        throw new UnauthorizedException('Invalid refresh token');
      }

      const newAccessToken = this.jwtService.sign({
        id: user.id,
        email: user.email,
        role: user.role,
      });

      const newRefreshToken = this.jwtService.sign(
        { id: user.id },
        { expiresIn: '30d' },
      );
      user.refreshToken = newRefreshToken;
      await this.userRepository.save(user);

      return { accessToken: newAccessToken, newRefreshToken };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }

  async logout(token: string): Promise<{ message: string }> {
    try {
      const payload = this.jwtService.verify(token);
      const user = await this.userRepository.findOneBy({ id: payload.id });

      if (!user) {
        throw new UnauthorizedException(
          'Foydalanuvchi topilmadi yoki token noto‘g‘ri ❌',
        );
      }

      user.refreshToken = null; // Refresh tokenni tozalash
      await this.userRepository.save(user);

      return { message: `Foydalanuvchi muvaffaqiyatli tizimdan chiqdi` };
    } catch (error) {
      throw new UnauthorizedException(
        'Token noto‘g‘ri yoki muddati tugagan ❌',
      );
    }
  }
}
