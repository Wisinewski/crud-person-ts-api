import { AddPersonParams } from './../../domain/usecases/add-person';
import { AddPersonRepository } from './../protocols/db/person/add-person-repository';

export class AddPersonRepositorySpy implements AddPersonRepository {
  person: AddPersonParams
  async add (person: AddPersonParams): Promise<void> {
    this.person = person
    return null
  }
}