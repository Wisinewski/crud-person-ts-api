import { PersonModel } from './../../domain/models/person';
import { LoadPersonByCpfRepository } from './../protocols/db/person/load-person-by-cpf-repository';
import { AddPersonParams } from './../../domain/usecases/add-person';
import { AddPersonRepository } from './../protocols/db/person/add-person-repository';
import { mockPersonModel } from '../../domain/test/mock-person';

export class AddPersonRepositorySpy implements AddPersonRepository {
  person: AddPersonParams
  result: PersonModel = mockPersonModel()
  async add (person: AddPersonParams): Promise<PersonModel> {
    this.person = person
    return this.result
  }
}

export class LoadPersonByCpfRepositorySpy implements LoadPersonByCpfRepository {
  cpf: String
  result: PersonModel = null
  async loadByCpf (cpf: String): Promise<PersonModel> {
    this.cpf = cpf
    return this.result
  }
}