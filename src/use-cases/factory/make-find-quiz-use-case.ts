import { QuizRepository } from '@/repositories/typeorm/quiz.repository'
import { FindQuizUseCase } from '../find-quiz'

export function makeFindQuizUseCase() {
  const quizRepository = new QuizRepository()
  const findQuizUseCase = new FindQuizUseCase(quizRepository)
  return findQuizUseCase
}