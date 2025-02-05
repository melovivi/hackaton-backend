import { IQuestion } from "./question.interface"

export interface IOption {
    id?: string
    question?: IQuestion
    content: string
    isCorrect: boolean
    createdAt?: Date
    updatedAt?: Date
  }