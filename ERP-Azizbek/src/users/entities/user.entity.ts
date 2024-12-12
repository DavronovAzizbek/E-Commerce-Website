import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Courses } from 'src/courses/entities/course.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50 })
  fullName: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 2500 })
  password: string;

  @Column({ type: 'varchar', length: 50, default: 'student' })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ nullable: true })
  refreshToken?: string;

  @ManyToMany(() => Courses, (course) => course.users)
  courses: Courses[];
  enrollments: any;
  results: any;
}
