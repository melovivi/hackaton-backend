import { FastifyInstance } from 'fastify'
import { createQuiz } from './create'
import { findQuiz } from './find'


export async function quizRoutes(app: FastifyInstance) {
  app.post('/quiz', createQuiz)
  app.get('/quiz/:id', findQuiz)
}
