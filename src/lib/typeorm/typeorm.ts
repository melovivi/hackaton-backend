import { Post } from '@/entities/post.entity'
import { User } from '@/entities/user.entity'
import { env } from '@/env'
import { DataSource } from 'typeorm'
import { CreateUserTable1719334002149 } from './migrations/1719334002149-createUserTable'
import { CreatePostTable1719840902989 } from './migrations/1719840902989-createPostTable'
import { UserAdmin1731604291746 } from './migrations/1731604291746-userAdmin'
import { CreateQuizTable1738277426034 } from './migrations/1738277426034-createQuizTable'
import { CreateQuestionTable1738277491381 } from './migrations/1738277491381-createQuestionTable'
import { CreateOptionTable1738277541706 } from './migrations/1738277541706-createOptionTable'
import { Quiz } from '@/entities/quiz.entity'
import { Question } from '@/entities/question.entity'
import { Option } from '@/entities/option.entity'

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  entities: [User, Post, Quiz, Question, Option],
  migrations: [
    CreateUserTable1719334002149,
    CreatePostTable1719840902989,
    UserAdmin1731604291746,
    CreateQuizTable1738277426034,
    CreateQuestionTable1738277491381,
    CreateOptionTable1738277541706
    
  ],
  logging: env.NODE_ENV === 'development',
})

appDataSource
  .initialize()
  .then(() => {
    console.log('Database with typeorm connected')
  })
  .catch((error) => {
    console.error(`Error connecting to database with typeorm:`, error)
  })
