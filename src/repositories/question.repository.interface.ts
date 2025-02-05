import { IQuestion } from '@/entities/models/question.interface'

export interface IQuestionRepository {
  create(question: IQuestion): Promise<IQuestion>
  findById(id: string): Promise<IQuestion | null>
  findAll(page: number, limit: number): Promise<IQuestion[]>
  update(question: IQuestion): Promise<IQuestion>
  delete(id: string): Promise<void>
}