import { PersonModel } from './../../../../domain/models/person';

export interface LoadPersonByCpfRepository {
  loadByCpf: (cpf: String) => Promise<PersonModel>
}