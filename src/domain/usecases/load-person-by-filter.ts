import { PersonModel } from './../models/person';

export type FilterPersonParams = Omit<PersonModel, 'id' | 'email' | 'nomePai' | 'nomeMae'>

export interface LoadPersonByFilter {
  load: (params: FilterPersonParams) => Promise<PersonModel[]>
}