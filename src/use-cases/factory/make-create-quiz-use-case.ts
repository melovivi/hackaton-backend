import { QuizRepository } from '@/repositories/typeorm/quiz.repository'
import { QuestionRepository } from '@/repositories/typeorm/question.repository'
import { OptionRepository } from '@/repositories/typeorm/option.repository'
import { CreateQuizUseCase } from '../create-quiz'
import { appDataSource } from '@/lib/typeorm/typeorm'

export function makeCreateQuizUseCase() {
  const quizRepository = new QuizRepository()
  const questionRepository = new QuestionRepository()
  const optionRepository = new OptionRepository()
  const createQuizUseCase = new CreateQuizUseCase(quizRepository, questionRepository, optionRepository, appDataSource)
  return createQuizUseCase
}