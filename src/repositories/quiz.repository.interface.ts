import { IQuiz } from '@/entities/models/quiz.interface'

export interface IQuizRepository {
  create(quiz: IQuiz): Promise<IQuiz>
  findById(id: string): Promise<IQuiz | null>
  findAll(page: number, limit: number): Promise<IQuiz[]>
  update(quiz: IQuiz): Promise<IQuiz>
  delete(id: string): Promise<void>
}