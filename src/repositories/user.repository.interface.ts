import { IUser } from '@/entities/models/user.interface'

export interface IUserRepository {
  create(
    name: string,
    email: string,
    password: string,
    isadmin: boolean,
  ): Promise<IUser | undefined>

  findById(id: string): Promise<IUser | null>
  findByEmail(email: string): Promise<IUser | null>
  findAll(isadmin: boolean | null, page: number, limit: number): Promise<{ data: IUser[], pagination: { totalItems: number, totalPages: number, currentPage: number } }>
  delete(id: string): Promise<void>
  update(user: IUser): Promise<IUser>
  searchByWord(page: number, limit: number, word: string): Promise<{ data: IUser[], pagination: { totalItems: number, totalPages: number, currentPage: number } }>
}
