import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm'
  import { IOption } from './models/option.interface'
  import { Question } from './question.entity'

@Entity('option')
export class Option implements IOption {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @ManyToOne(() => Question, (question) => question.options)
  @JoinColumn({ name: 'question_id' })
  question: Question

  @Column({ type: 'text' })
  content: string

  @Column({ name: 'is_correct' , type: 'boolean' })
  isCorrect: boolean

  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date
}