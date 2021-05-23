import { LoadPersonByCpfRepository } from './../../protocols/db/load-person-by-cpf-repository';
import { PersonModel } from './../../../domain/models/person';
import { LoadPersonByCpf } from './../../../domain/usecases/load-person-by-cpf';

export class DbLoadPersonByCpf implements LoadPersonByCpf {
  constructor (
    private readonly loadPersonByCpfRepository: LoadPersonByCpfRepository
  ) {}

  async load (cpf: string): Promise<PersonModel> {
    await this.loadPersonByCpfRepository.loadByCpf(cpf)
    return null
  }
}