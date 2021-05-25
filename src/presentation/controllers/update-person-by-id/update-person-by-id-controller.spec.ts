import { InvalidParamError } from './../../errors/invalid-param-error';
import { throwError } from './../../../domain/test/test-helper';
import { UpdatePersonByIdSpy } from './../../test/mock-person';
import { MissingParamError } from './../../errors/missing-param-error';
import { badRequest, serverError, forbidden } from './../../helpers/http-helper';
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

  test('should return 500 if UpdatePersonById throws', async () => {
    const { sut, updatePersonByIdSpy } = makeSut()
    jest.spyOn(updatePersonByIdSpy, 'update').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(serverError(new Error()))
  });

  test('should return 403 if UpdatePersonById returns null', async () => {
    const { sut, updatePersonByIdSpy } = makeSut()
    updatePersonByIdSpy.result = null
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('id')))
  });
});