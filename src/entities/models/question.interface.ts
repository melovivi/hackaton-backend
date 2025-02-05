import { IOption } from './option.interface'
import { IQuiz } from './quiz.interface'

export interface IQuestion {
  id?: string
  quiz?: IQuiz
  content: string
  options: IOption[]
  createdAt?: Date
  updatedAt?: Date
}