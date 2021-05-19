import { PersonModel } from './../models/person';

type AddPersonParams = Omit<PersonModel, 'id'>

export interface AddPerson {
  add: (person: AddPersonParams) => Promise<void>
}