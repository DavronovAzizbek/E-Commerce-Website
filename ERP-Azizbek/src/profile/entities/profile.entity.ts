import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profiles')
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  role: string; // Admin yoki user rolini saqlash uchun

  @Column({ type: 'varchar', length: 255, nullable: true })
  userId: string; // Faqat userga tegishli profillar uchun
}
