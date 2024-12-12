import {
  IsString,
  IsEmail,
  IsOptional,
  IsIn,
  MinLength,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsEmail()
  @MaxLength(50)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(40)
  password: string;

  @IsOptional()
  @IsIn(['admin'])
  role?: string;
}
