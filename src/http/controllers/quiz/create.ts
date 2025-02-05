import { CreateQuizDto } from '@/dto/create-quiz.dto'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeCreateQuizUseCase } from '@/use-cases/factory/make-create-quiz-use-case'
import { makeFindPostUseCase } from '@/use-cases/factory/make-find-post-use-case'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function createQuiz(req: FastifyRequest, reply: FastifyReply) {
  const { postId, questions } = CreateQuizDto.parse(req.body)

  const findPostUseCase = makeFindPostUseCase()
  const post = await findPostUseCase.handler(postId)

  if (!post) {
    throw new ResourceNotFoundError('Post')
  }

  const createQuizUseCase = makeCreateQuizUseCase()
  const quiz = await createQuizUseCase.handler({ post, questions })

  return reply.status(201).send(quiz)
}