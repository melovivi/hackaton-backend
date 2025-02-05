import { IOption } from '@/entities/models/option.interface'

export interface IOptionRepository {
  create(option: IOption): Promise<IOption>
  findById(id: string): Promise<IOption | null>
  findAll(page: number, limit: number): Promise<IOption[]>
  update(option: IOption): Promise<IOption>
  delete(id: string): Promise<void>
}