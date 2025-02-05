import { IQuiz } from '@/entities/models/quiz.interface'
import { IQuizRepository } from '@/repositories/quiz.repository.interface'
import { IQuestionRepository } from '@/repositories/question.repository.interface'
import { IOptionRepository } from '@/repositories/option.repository.interface'
import { DataSource } from 'typeorm'

export class CreateQuizUseCase {
  constructor(
    private quizRepository: IQuizRepository,
    private questionRepository: IQuestionRepository,
    private optionRepository: IOptionRepository,
    private dataSource: DataSource
  ) {}

  async handler(quizData: { post: IQuiz['post'], questions: Omit<IQuiz['questions'][number], 'quiz'>[] }): Promise<IQuiz | null> {
    const { post, questions } = quizData

    return await this.dataSource.transaction(async transactionalEntityManager => {
      const quiz = await this.quizRepository.create({ post, questions: [] })

      for (const questionData of questions) {
        const question = await this.questionRepository.create({ ...questionData, quiz })

        for (const optionData of questionData.options) {
          await this.optionRepository.create({ ...optionData, question })
        }
      }

      return this.quizRepository.findById(quiz.id!)
    })
  }
}