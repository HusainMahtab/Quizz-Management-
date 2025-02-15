import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Quiz } from './Quiz';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @OneToMany(() => Quiz, (quiz) => quiz.teacher)
  quizzes!: Quiz[];
}