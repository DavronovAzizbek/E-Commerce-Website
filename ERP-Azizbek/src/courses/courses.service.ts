import { Injectable, NotFoundException } from '@nestjs/common';
import { Courses } from './entities/course.entity';
import { CreateCourseDto } from './dto/create-course.dto';

@Injectable()
export class CoursesService {
  private courses: Courses[] = [];

  // Barcha kurslarni ko'rish
  findAll(): Courses[] {
    return this.courses;
  }

  // Kursni ID bo'yicha topish
  findOne(id: string): Courses | undefined {
    return this.courses.find((course) => course.id === id);
  }

  // Kurs yaratis
  create(createCourseDto: CreateCourseDto): Courses {
    const newCourse: Courses = {
      id: Date.now().toString(), ...createCourseDto,
      users: undefined
    };
    this.courses.push(newCourse);
    return newCourse;
  }

  // Kursni yangilash
  update(id: string, updateCourseDto: Partial<Courses>): Courses | undefined {
    const courseIndex = this.courses.findIndex((course) => course.id === id);
    if (courseIndex === -1) return undefined;

    this.courses[courseIndex] = {
      ...this.courses[courseIndex],
      ...updateCourseDto,
    };
    return this.courses[courseIndex];
  }

  // Kursni o'chirish
  remove(id: string): Courses | undefined {
    const courseIndex = this.courses.findIndex((course) => course.id === id);
    if (courseIndex === -1) return undefined;

    const deletedCourse = this.courses[courseIndex];
    this.courses.splice(courseIndex, 1);
    return deletedCourse;
  }
}
