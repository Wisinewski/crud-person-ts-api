import { PersonModel } from './../models/person';

export interface LoadPersonByCpf {
  load: (cpf: string) => Promise<PersonModel>
}