import { makeLoadPersonByCpfValidation } from './load-person-by-cpf-validation-factory';
import { makeDbLoadPersonByCpf } from './../../usecases/load-person-by-cpf/db-load-person-by-cpf';
import { LoadPersonByCpfController } from './../../../../presentation/controllers/load-person-by-cpf/load-person-by-cpf-controller';

export const makeLoadPersonByCpfController = (): LoadPersonByCpfController => {
  const loadPersonByCpfController = new LoadPersonByCpfController(makeLoadPersonByCpfValidation(), makeDbLoadPersonByCpf())
  return loadPersonByCpfController
}