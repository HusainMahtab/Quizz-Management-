import 'reflect-metadata';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';

@Entity()
export class Quiz {
  @PrimaryGeneratedColumn()
  id!:number

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at!: Date;

  @ManyToOne(() => User, (user) => user.quizzes)
  @JoinColumn({ name: 'teacher_id' })
  teacher!: User;
}