import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/create-profile.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RolesGuard, Roles } from 'src/auth/roles.guard';
import { RolesUserGuard } from 'src/auth/rolesUserGuard';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  @Post()
  async createProfile(@Body() createProfileDto: CreateProfileDto) {
    const profile = await this.profileService.create(createProfileDto);
    return { message: 'Profile successfully created', profile };
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  async getProfiles() {
    const profiles = await this.profileService.findAll();
    return { message: 'Profiles retrieved successfully', profiles };
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  @Delete(':id')
  async deleteProfile(@Param('id') id: string) {
    await this.profileService.remove(id);
    return { message: 'Profile successfully deleted' };
  }

  @UseGuards(AuthGuard, RolesUserGuard)
  @Patch(':id')
  async updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
    @Req() req: any,
  ) {
    const profile = await this.profileService.update(id, req.user, updateProfileDto);
    return { message: 'Profile successfully updated', profile };
  }
}
