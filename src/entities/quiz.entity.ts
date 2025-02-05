import {
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from 'typeorm'
  import { IQuiz } from './models/quiz.interface'
  import { Post } from './post.entity'
  import { Question } from './question.entity'
  
  @Entity('quiz')
  export class Quiz implements IQuiz {
    @PrimaryGeneratedColumn('uuid')
    id?: string
  
    @OneToOne(() => Post, (post) => post.quiz)
    @JoinColumn({ name: 'post_id' })
    post: Post
  
    @OneToMany(() => Question, (question) => question.quiz)
    questions: Question[]
  
    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date
  }