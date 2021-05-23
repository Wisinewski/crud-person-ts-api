import { badRequest } from './../../helpers/http-helper';
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
    expect(validationSpy.data).toBe(httpRequest.params)
  });

  test('should return 400 if Validation returns an error', async () => {
    const { sut, validationSpy } = makeSut()
    const error = new MissingParamError('any_field')
    validationSpy.result = error
    const httpRequest = mockRequest()
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse).toEqual(badRequest(error))
  });
});