import { FastifyReply, FastifyRequest } from 'fastify'
import { ResourceNotFoundError } from '@/use-cases/errors/resource-not-found-error'
import { makeFindQuizUseCase } from '@/use-cases/factory/make-find-quiz-use-case'
import { z } from 'zod'

export async function findQuiz(req: FastifyRequest, reply: FastifyReply) {
  const paramsSchema = z.object({
    id: z.string().uuid(),
  })

  const { id } = paramsSchema.parse(req.params)

  const findQuizUseCase = makeFindQuizUseCase()
  const quiz = await findQuizUseCase.handler(id)

  if (!quiz) {
    throw new ResourceNotFoundError('Quiz')
  }

  return reply.status(200).send(quiz)
}