import { IQuestion } from '@/entities/models/question.interface'
import { IQuestionRepository } from '@/repositories/question.repository.interface'

export class CreateQuestionUseCase {
  constructor(private questionRepository: IQuestionRepository) {}

  async handler(question: IQuestion): Promise<IQuestion | undefined> {
    return this.questionRepository.create(question)
  }
}