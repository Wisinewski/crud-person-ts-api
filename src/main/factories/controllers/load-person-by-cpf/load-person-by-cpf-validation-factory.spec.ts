import { makeLoadPersonByCpfValidation } from './load-person-by-cpf-validation-factory';
import { CpfValidatorAdapter } from './../../../../infra/validators/cpf-validator-adapter';
import { CpfValidation } from './../../../../validation/validators/cpf-validation';
import { ValidationComposite } from './../../../../validation/validators/validation-composite';
import { Validation } from './../../../../presentation/protocols/validation';

jest.mock('../../../../validation/validators/validation-composite')

describe('LoadPersonByCpfValidationFactory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeLoadPersonByCpfValidation()
    const validations: Validation[] = []
    validations.push(new CpfValidation('cpf', new CpfValidatorAdapter()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  });
});