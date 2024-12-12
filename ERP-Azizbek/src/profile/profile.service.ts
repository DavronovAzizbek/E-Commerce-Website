import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  private profiles = [];

  async create(createProfileDto: CreateProfileDto) {
    const newProfile = { id: Date.now().toString(), ...createProfileDto };
    this.profiles.push(newProfile);
    return newProfile;
  }

  async findAll() {
    return this.profiles;
  }

  async remove(id: string) {
    const index = this.profiles.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException('Profile not found');
    }
    this.profiles.splice(index, 1);
  }

  async update(id: string, user: any, updateProfileDto: UpdateProfileDto) {
    const profile = this.profiles.find((p) => p.id === id);
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }

    if (user.role !== 'admin' && user.id !== profile.userId) {
      throw new ForbiddenException('You do not have permission to update this profile');
    }

    Object.assign(profile, updateProfileDto);
    return profile;
  }
}
