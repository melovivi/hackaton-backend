import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm'
  import { IQuestion } from './models/question.interface'
  import { Quiz } from './quiz.entity'
import { Option } from './option.entity'

@Entity('question')
export class Question implements IQuestion {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @ManyToOne(() => Quiz, (quiz) => quiz.questions)
  @JoinColumn({ name: 'quiz_id' })
  quiz: Quiz

  @Column({ type: 'text' })
  content: string

  @OneToMany(() => Option, (option) => option.question)
  options: Option[]

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date
}