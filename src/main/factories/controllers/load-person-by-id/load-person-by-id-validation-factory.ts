import { Validation } from './../../../../presentation/protocols/validation';
import { ValidationComposite } from './../../../../validation/validators/validation-composite';

export const makeLoadPersonByIdValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  return new ValidationComposite(validations)
}