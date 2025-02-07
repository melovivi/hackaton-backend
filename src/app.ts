import 'reflect-metadata'
import '@/lib/typeorm/typeorm'
import fastify from 'fastify'
import fastifyJwt from '@fastify/jwt'
import { env } from './env'
import { validateJwt } from './http/middlewares/jwt-validate'
import { globalErrorHandler } from './utils/global-error-handler'
import { userRoutes } from './http/controllers/user/router'
import { postRoutes } from './http/controllers/post/router'
import fastifyCors from '@fastify/cors'
import { quizRoutes } from './http/controllers/quiz/router'

export const app = fastify()

app.register(fastifyCors, {
  origin: '*', 
  methods: ['GET', 'PUT', 'POST', 'DELETE'],
})

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: { expiresIn: '10m' },
})

app.addHook('onRequest', validateJwt)

app.register(userRoutes)
app.register(postRoutes)
app.register(quizRoutes)

app.setErrorHandler(globalErrorHandler)
