import { LoadPersonByCpf } from './../../domain/usecases/load-person-by-cpf';
import { mockPersonModel } from './../../domain/test/mock-person';
import { PersonModel } from './../../domain/models/person';
import { AddPerson, AddPersonParams } from './../../domain/usecases/add-person';

export class AddPersonSpy implements AddPerson {
  person: AddPersonParams
  result: PersonModel = mockPersonModel()
  async add (person: AddPersonParams): Promise<PersonModel> {
    this.person = person
    return this.result
  }
}

export class LoadPersonByCpfSpy implements LoadPersonByCpf {
  cpf: string
  async load (cpf: string): Promise<PersonModel> {
    this.cpf = cpf
    return null
  }
}