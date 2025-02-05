import { IOption } from '@/entities/models/option.interface'
import { IOptionRepository } from '@/repositories/option.repository.interface'

export class CreateOptionUseCase {
  constructor(private optionRepository: IOptionRepository) {}

  async handler(option: IOption): Promise<IOption | undefined> {
    return this.optionRepository.create(option)
  }
}