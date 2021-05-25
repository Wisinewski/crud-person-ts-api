import { UpdatePersonByIdController } from './update-person-by-id-controller';
import { ValidationSpy } from './../../test/mock-validation';
import { mockUpdatePersonParams } from './../../../domain/test/mock-person';
import { HttpRequest } from './../../protocols/http';

const mockRequest = (): HttpRequest => ({
  body: mockUpdatePersonParams()
})

type SutTypes = {
  sut: UpdatePersonByIdController
  validationSpy: ValidationSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const sut = new UpdatePersonByIdController(validationSpy)
  return {
    sut,
    validationSpy
  }
}

describe('UpdatePersonByIdController', () => {
  test('should call Validation with correct values', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.data).toEqual(httpRequest.body)
  });
});