import { User } from '@/entities/user.entity'
import { IUserRepository } from '@/repositories/user.repository.interface'

export class FindAllUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(
    isadmin: boolean | null,
    page: number,
    limit: number,
  ): Promise<{data: User[], pagination: { totalItems: number, totalPages: number, currentPage: number }}> {
    return await this.userRepository.findAll(isadmin, page, limit)
  }
}
