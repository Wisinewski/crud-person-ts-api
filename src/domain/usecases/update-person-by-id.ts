import { PersonModel } from './../models/person';

export type UpdatePersonParams = Omit<PersonModel, 'id' | 'cpf'>

export interface UpdatePersonById {
  update: (person: UpdatePersonParams) => Promise<PersonModel>
}