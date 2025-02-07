import { IPost } from '@/entities/models/post.interface'
import { Post } from '@/entities/post.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Like, Repository } from 'typeorm'
import { IPostRepository } from '../post.repository.interface'
import { User } from '@/entities/user.entity'

export class PostRepository implements IPostRepository {
  private repository: Repository<Post>
  private userRepository: Repository<User>

  constructor() {
    this.repository = appDataSource.getRepository(Post)
    this.userRepository = appDataSource.getRepository(User)
  }

  async create(post: IPost): Promise<IPost> {
    return await this.repository.save(post)
  }

  async findById(id: string): Promise<IPost | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['author', 'quiz'],
    })
  }

  async findAll(page: number, limit: number): Promise<IPost[]> {
    return await this.repository.find({
      take: limit,
      skip: page * limit,
      relations: ['author', 'quiz'],
    })
  }

  async searchByWord(
    page: number,
    limit: number,
    keyword: string,
  ): Promise<{ data: IPost[], pagination: { totalItems: number, totalPages: number, currentPage: number } }> {
    const [data, totalItems] = await Promise.all([
      this.repository.find({
        take: limit,
        skip: page * limit,
        relations: ['author', 'quiz'],
        where: [
          { title: Like(`%${keyword}%`) },
          { content: Like(`%${keyword}%`) },
        ],
      }),
      this.repository.count({
        where: [
          { title: Like(`%${keyword}%`) },
          { content: Like(`%${keyword}%`) },
        ],
      })
    ])
      
    const totalPages = Math.ceil(totalItems / limit);

  return {
    data,
    pagination: {
      totalItems,
      totalPages,
      currentPage: page
    }
  }
      
  }

  async getTotalItems(): Promise<number> {
    return await this.repository.count();
  }

  async update(post: IPost): Promise<IPost> {
    return await this.repository.save(post)
  }

  async delete(id: string): Promise<void> {
    const post = await this.repository.findOne({ where: { id }, relations: ['quiz', 'quiz.questions', 'quiz.questions.options'] })
    if (post && post.quiz) {
      if (post.quiz.questions) {
        for (const question of post.quiz.questions) {
          if (question.options) {
            for (const option of question.options) {
              await this.repository.manager.remove(option)
            }
          }
          await this.repository.manager.remove(question)
        }
        
      }
      await this.repository.manager.remove(post.quiz)
    }
  
    await this.repository.delete(id)
  }
}
