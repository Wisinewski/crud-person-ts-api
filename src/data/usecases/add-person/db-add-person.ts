import { AddPersonRepository } from './../../protocols/db/person/add-person-repository';
import { AddPerson, AddPersonParams } from './../../../domain/usecases/add-person';

export default class DbAddPerson implements AddPerson {
  constructor (
    private readonly addPersonRepository: AddPersonRepository
  ) {}

  async add (personData: AddPersonParams): Promise<void> {
    await this.addPersonRepository.add(personData)
    return null
  }
}