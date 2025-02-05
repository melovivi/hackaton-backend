import { IPost } from "./post.interface"
import { IQuestion } from "./question.interface"

export interface IQuiz {
    id?: string
    post: IPost
    questions: IQuestion[]
    createdAt?: Date
    updatedAt?: Date
  }