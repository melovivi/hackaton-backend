import { IQuiz } from '@/entities/models/quiz.interface'
import { Quiz } from '@/entities/quiz.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Repository } from 'typeorm'
import { IQuizRepository } from '../quiz.repository.interface'

export class QuizRepository implements IQuizRepository {
  private repository: Repository<Quiz>

  constructor() {
    this.repository = appDataSource.getRepository(Quiz)
  }

  async create(quiz: IQuiz): Promise<IQuiz> {
    return await this.repository.save(quiz)
  }

  async findById(id: string): Promise<IQuiz | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['post', 'questions', 'questions.options'],
    })
  }

  async findAll(page: number, limit: number): Promise<IQuiz[]> {
    return await this.repository.find({
      take: limit,
      skip: page * limit,
      relations: ['post', 'questions', 'questions.options'],
    })
  }

  async update(quiz: IQuiz): Promise<IQuiz> {
    return await this.repository.save(quiz)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}