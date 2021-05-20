import { LoadPersonByCpfRepository } from './../../protocols/db/person/load-person-by-cpf-repository';
import { AddPersonRepository } from './../../protocols/db/person/add-person-repository';
import { AddPerson, AddPersonParams } from './../../../domain/usecases/add-person';

export default class DbAddPerson implements AddPerson {
  constructor (
    private readonly loadPersonByCpfRepository: LoadPersonByCpfRepository,
    private readonly addPersonRepository: AddPersonRepository
  ) {}

  async add (personData: AddPersonParams): Promise<void> {
    const person = await this.loadPersonByCpfRepository.loadByCpf(personData.cpf)
    if (!person) {
      await this.addPersonRepository.add(personData)
    }
    return null
  }
}