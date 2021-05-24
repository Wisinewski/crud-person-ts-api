import { MissingParamError } from './../../errors/missing-param-error';
import { badRequest } from './../../helpers/http-helper';
import { DeletePersonByIdController } from './delete-person-by-id-controller';
import { ValidationSpy } from '../../test/mock-validation';
import { HttpRequest } from './../../protocols/http';

const mockRequest = (): HttpRequest => ({
  body: {
    id: 'any_id'
  }
})

type SutTypes = {
  sut: DeletePersonByIdController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new DeletePersonByIdController(validationSpy)
  return {
    sut,
    validationSpy
  }
}

describe('DeletePersonByIdController', () => {
  test('should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.data).toEqual(httpRequest.body)
  });

  test('should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    const error = new MissingParamError('any_field')
    validationSpy.result = error
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(badRequest(new MissingParamError('any_field')))
  });
});