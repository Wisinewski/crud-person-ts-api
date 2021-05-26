import { LoadPersonByFilterRepository } from './../../protocols/db/load-person-by-filter-repository';
import { PersonModel } from './../../../domain/models/person';
import { LoadPersonByFilter, FilterPersonParams } from './../../../domain/usecases/load-person-by-filter';

export class DbLoadPersonByFilter implements LoadPersonByFilter {
  constructor (
    private readonly loadPersonByFilterRepository: LoadPersonByFilterRepository
  ) {}

  async load (params: FilterPersonParams): Promise<PersonModel[]> {
    const persons = await this.loadPersonByFilterRepository.loadByFilter(params)
    return persons
  }
}