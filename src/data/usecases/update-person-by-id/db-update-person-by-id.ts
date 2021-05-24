import { PersonModel } from './../../../domain/models/person';
import { UpdatePersonParams, UpdatePersonById } from './../../../domain/usecases/update-person-by-id';
import { UpdatePersonByIdRepository } from './../../protocols/db/update-person-by-id-repository';

export class DbUpdatePersonById implements UpdatePersonById {
  constructor (
    private readonly updatePersonByIdRepository: UpdatePersonByIdRepository
  ) {}

  async update (person: UpdatePersonParams): Promise<PersonModel> {
    await this.updatePersonByIdRepository.updateById(person)
    return null
  }
}