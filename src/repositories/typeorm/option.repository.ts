import { IOption } from '@/entities/models/option.interface'
import { Option } from '@/entities/option.entity'
import { appDataSource } from '@/lib/typeorm/typeorm'
import { Repository } from 'typeorm'
import { IOptionRepository } from '../option.repository.interface'

export class OptionRepository implements IOptionRepository {
  private repository: Repository<Option>

  constructor() {
    this.repository = appDataSource.getRepository(Option)
  }

  async create(option: IOption): Promise<IOption> {
    return await this.repository.save(option)
  }

  async findById(id: string): Promise<IOption | null> {
    return await this.repository.findOne({
      where: { id },
      relations: ['question'],
    })
  }

  async findAll(page: number, limit: number): Promise<IOption[]> {
    return await this.repository.find({
      take: limit,
      skip: page * limit,
      relations: ['question'],
    })
  }

  async update(option: IOption): Promise<IOption> {
    return await this.repository.save(option)
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id)
  }
}