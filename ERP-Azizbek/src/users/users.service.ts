
import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async createAdmin(
    fullName: string,
    email: string,
    password: string,
    role: string,
  ) {
    const user = this.userRepository.create({
      fullName,
      email,
      password,
      role,
    });
    await this.userRepository.save(user);
    return user;
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async findById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.userRepository.update(id, updateUserDto);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    return { message: `User #${id} has been removed` };
  }

  async findByToken(token: string): Promise<User | null> {
    try {
      const pureToken = token.startsWith('Bearer ') ? token.slice(7) : token;
      const decoded = this.jwtService.verify(pureToken);
      return this.userRepository.findOne({ where: { id: decoded.id } });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return null;
    }
  }
}
