import { IQuestion } from '@/entities/models/question.interface'
import { Question } from '@/entities/question.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Repository } from 'typeorm'
import { IQuestionRepository } from '../question.repository.interface'

export class QuestionRepository implements IQuestionRepository {
  private repository: Repository<Question>

  constructor() {
    this.repository = appDataSource.getRepository(Question)
  }

  async create(question: IQuestion): Promise<IQuestion> {
    return await this.repository.save(question)
  }

  async findById(id: string): Promise<IQuestion | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['quiz', 'options'],
    })
  }

  async findAll(page: number, limit: number): Promise<IQuestion[]> {
    return await this.repository.find({
      take: limit,
      skip: page * limit,
      relations: ['quiz', 'options'],
    })
  }

  async update(question: IQuestion): Promise<IQuestion> {
    return await this.repository.save(question)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}