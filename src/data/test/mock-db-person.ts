import { PersonModel } from './../../domain/models/person';
import { LoadPersonByCpfRepository } from './../protocols/db/person/load-person-by-cpf-repository';
import { AddPersonParams } from './../../domain/usecases/add-person';
import { AddPersonRepository } from './../protocols/db/person/add-person-repository';

export class AddPersonRepositorySpy implements AddPersonRepository {
  person: AddPersonParams
  async add (person: AddPersonParams): Promise<void> {
    this.person = person
    return null
  }
}

export class LoadPersonByCpfRepositorySpy implements LoadPersonByCpfRepository {
  result: PersonModel = null
  async loadByCpf (cpf: String): Promise<PersonModel> {
    return this.result
  }
}