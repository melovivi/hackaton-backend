import { QuestionRepository } from '@/repositories/typeorm/question.repository'
import { CreateQuestionUseCase } from '../create-question'

export function makeCreateQuestionUseCase() {
  const questionRepository = new QuestionRepository()
  const createQuestionUseCase = new CreateQuestionUseCase(questionRepository)
  return createQuestionUseCase
}