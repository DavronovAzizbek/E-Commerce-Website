import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Courses {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;
  users: any;
}
