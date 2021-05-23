import { LoadPersonByCpfSpy } from './../../test/mock-person';
import { LoadPersonByCpfController } from './load-person-by-cpf-controller';
import { HttpRequest } from './../../protocols/http';
import { ValidationSpy } from '../../test/mock-validation';

const mockRequest = (): HttpRequest => ({
  body: {
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
    expect(validationSpy.data).toBe(httpRequest.body)
  });
});