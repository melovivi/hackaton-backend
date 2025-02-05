import { z } from 'zod'

const OptionSchema = z.object({
  content: z.string(),
  isCorrect: z.boolean(),
})

const QuestionSchema = z.object({
  content: z.string(),
  options: z.array(OptionSchema),
})

export const CreateQuizDto = z.object({
  postId: z.string().uuid(),
  questions: z.array(QuestionSchema),
})

export type CreateQuizDto = z.infer<typeof CreateQuizDto>