import {
  Controller,
  Post,
  Body,
  Res,
  Req,
  UseGuards,
  UnauthorizedException,
  Get,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { AuthGuard } from './auth.guard';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register/admin')
  async registerAdmin(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.registerAdmin(createAuthDto);
  }

  @Post('register/user')
  async registerUser(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.register(createAuthDto);
  }

  @Post('login')
  async login(
    @Body() loginDto: { email: string; password: string; role: string },
    @Res() res: Response,
  ) {
    const { accessToken, refreshToken } =
      await this.authService.login(loginDto);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ accessToken });
  }

  @UseGuards(AuthGuard)
  @Post('refresh-token')
  async refreshAccessToken(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is missing ❌');
    }
    const { accessToken, newRefreshToken } =
      await this.authService.refreshAccessToken(refreshToken);

    res.cookie('refreshToken', newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ accessToken });
  }
  @UseGuards(AuthGuard)
  @Delete('logout')
  async logout(@Res() res: Response, @Req() req: Request) {
    // Refresh tokenni cookie'dan olish
    const refreshToken = req.cookies.refreshToken;

    // Agar refresh token yo'q bo'lsa, xato xabarini qaytarish
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is missing ❌');
    }

    // Refresh tokenni null qilish va foydalanuvchini tizimdan chiqarish
    await this.authService.logout(refreshToken);

    // Cookie'dan refresh tokenni o'chirish
    res.clearCookie('refreshToken');

    // Javobni yuborish
    return res
      .status(200)
      .json({ message: 'Foydalanuvchi tizimdan muvaffaqiyatli chiqdi' });
  }
}
