import { CpfValidatorAdapter } from './../../../../infra/validators/cpf-validator-adapter';
import { CpfValidation } from './../../../../validation/validators/cpf-validation';
import { Validation } from './../../../../presentation/protocols/validation';
import { ValidationComposite } from './../../../../validation/validators/validation-composite';

export const makeLoadPersonByCpfValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  validations.push(new CpfValidation('cpf', new CpfValidatorAdapter()))
  return new ValidationComposite(validations)
}