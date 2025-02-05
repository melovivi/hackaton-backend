import { IQuizRepository } from '@/repositories/quiz.repository.interface'
import { IQuiz } from '@/entities/models/quiz.interface'

export class FindQuizUseCase {
  constructor(private quizRepository: IQuizRepository) {}

  async handler(id: string): Promise<IQuiz | null> {
    return this.quizRepository.findById(id)
  }
}