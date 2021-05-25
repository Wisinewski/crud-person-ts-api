import { UpdatePersonByIdSpy } from './../../test/mock-person';
import { MissingParamError } from './../../errors/missing-param-error';
import { badRequest } from './../../helpers/http-helper';
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
  updatePersonByIdSpy: UpdatePersonByIdSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const updatePersonByIdSpy = new UpdatePersonByIdSpy()
  const sut = new UpdatePersonByIdController(validationSpy, updatePersonByIdSpy)
  return {
    sut,
    validationSpy,
    updatePersonByIdSpy
  }
}

describe('UpdatePersonByIdController', () => {
  test('should call Validation with correct values', async () => {
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
    expect(httpResponse).toEqual(badRequest(error))
  });

  test('should call UpdatePersonById with correct values', async () => {
    const { sut, updatePersonByIdSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(updatePersonByIdSpy.person).toEqual(httpRequest.body)
  });
});