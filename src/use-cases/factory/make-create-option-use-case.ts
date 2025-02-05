import { OptionRepository } from '@/repositories/typeorm/option.repository'
import { CreateOptionUseCase } from '../create-option'

export function makeCreateOptionUseCase() {
  const optionRepository = new OptionRepository()
  const createOptionUseCase = new CreateOptionUseCase(optionRepository)
  return createOptionUseCase
}