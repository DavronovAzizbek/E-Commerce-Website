import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { CoursesService } from './courses.service';
import { Courses } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    const courses = this.coursesService.findAll();
    return {
      message: 'All courses retrieved successfully!',
      data: courses,
    };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    const course = this.coursesService.findOne(id);
    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found!`);
    }
    return {
      message: `Course with ID ${id} retrieved successfully!`,
      data: course,
    };
  }

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    const newCourse = this.coursesService.create(createCourseDto);
    return {
      message: 'Course created successfully!',
      data: newCourse,
    };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: Partial<Courses>) {
    const updatedCourse = this.coursesService.update(id, updateCourseDto);
    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${id} not found!`);
    }
    return {
      message: `Course with ID ${id} updated successfully!`,
      data: updatedCourse,
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    const deletedCourse = this.coursesService.remove(id);
    if (!deletedCourse) {
      throw new NotFoundException(`Course with ID ${id} not found!`);
    }
    return {
      message: `Course with ID ${id} deleted successfully!`,
      data: deletedCourse,
    };
  }
}
