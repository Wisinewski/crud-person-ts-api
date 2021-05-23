import { InvalidParamError } from './../../errors/invalid-param-error';
import { ServerError } from './../../errors/server-error';
import { throwError } from './../../../domain/test/test-helper';
import { badRequest, serverError, forbidden } from './../../helpers/http-helper';
import { MissingParamError } from './../../errors/missing-param-error';
import { LoadPersonByCpfSpy } from './../../test/mock-person';
import { LoadPersonByCpfController } from './load-person-by-cpf-controller';
import { HttpRequest } from './../../protocols/http';
import { ValidationSpy } from '../../test/mock-validation';

const mockRequest = (): HttpRequest => ({
  params: {
    cpf: 'any_cpf'
  }
})

type SutTypes = {
  sut: LoadPersonByCpfController
  validationSpy: ValidationSpy
  loadPersonByCpfSpy: LoadPersonByCpfSpy
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationSpy()
  const loadPersonByCpfSpy = new LoadPersonByCpfSpy()
  const sut = new LoadPersonByCpfController(validationSpy, loadPersonByCpfSpy)
  return {
    sut, 
    validationSpy,
    loadPersonByCpfSpy
  }
}

describe('LoadPersonByCpfController', () => {
  test('should call Validation with correct value', async () => {
    const { sut, validationSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(validationSpy.data).toBe(httpRequest.params.cpf)
  });

  test('should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    const error = new MissingParamError('any_field')
    validationSpy.result = error
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(error))
  });

  test('should return 500 if LoadPersonByCpf throws', async () => {
    const { sut, loadPersonByCpfSpy } = makeSut()
    jest.spyOn(loadPersonByCpfSpy, 'load').mockImplementationOnce(throwError)
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(serverError(new ServerError(null)))
  });

  test('should call LoadPersonByCpf with correct value', async () => {
    const { sut, loadPersonByCpfSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(loadPersonByCpfSpy.cpf).toEqual(mockRequest().params.cpf)
  });

  test('should return 403 if LoadPersonByCpf returns null', async () => {
    const { sut, loadPersonByCpfSpy } = makeSut()
    loadPersonByCpfSpy.result = null
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(forbidden(new InvalidParamError('cpf')))
  });
});