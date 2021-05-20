import { mockPersonModel } from './../../domain/test/mock-person';
import { PersonModel } from './../../domain/models/person';
import { AddPerson, AddPersonParams } from './../../domain/usecases/add-person';

export class AddPersonSpy implements AddPerson {
  result: PersonModel = mockPersonModel()
  async add (person: AddPersonParams): Promise<PersonModel> {
    return this.result
  }
}