import { AddPersonParams } from './../../../../domain/usecases/add-person';

export interface AddPersonRepository {
  add: (personData: AddPersonParams) => Promise<void>
}