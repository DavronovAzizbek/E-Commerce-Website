import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsInt()
  @Min(0)
  @Max(10000)
  price: number;
}
