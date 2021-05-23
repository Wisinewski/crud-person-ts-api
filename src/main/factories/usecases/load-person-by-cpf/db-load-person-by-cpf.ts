import { DbLoadPersonByCpf } from './../../../../data/usecases/load-person-by-cpf/db-load-person-by-cpf';
import { PersonMongoRepository } from './../../../../infra/db/mongodb/person-mongo-repository';
import { LoadPersonByCpf } from './../../../../domain/usecases/load-person-by-cpf';

export const makeDbLoadPersonByCpf = (): LoadPersonByCpf => {
  const personMongoRepository = new PersonMongoRepository()
  return new DbLoadPersonByCpf(personMongoRepository)
}