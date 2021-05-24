import { ValidationComposite } from './../../../../validation/validators/validation-composite';
import { Validation } from './../../../../presentation/protocols/validation';
import { RequiredFieldValidation } from './../../../../validation/validators/required-field-validation';
import { makeDeletePersonByIdValidation } from './delete-person-by-id-validation-factory';

jest.mock('../../../../validation/validators/validation-composite')

describe('DeletePersonByIdValidationFactory', () => {
  test('should call ValidationComposite with all validations', () => {
    makeDeletePersonByIdValidation()
    const validations: Validation[] = []
    validations.push(new RequiredFieldValidation('id'))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  });
});