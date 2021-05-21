import { CpfValidation } from './cpf-validation';
import { CpfValidatorSpy } from './../test/mock-cpf-validator';
import { InvalidParamError } from './../../presentation/errors/invalid-param-error';

type SutTypes = {
  sut: CpfValidation
  cpfValidatorSpy: CpfValidatorSpy
}

const makeSut = (): SutTypes => {
  const cpfValidatorSpy = new CpfValidatorSpy()
  const sut = new CpfValidation('cpf', cpfValidatorSpy)
  return {
    sut,
    cpfValidatorSpy
  }
}

describe('CpfValidation', () => {
  test('should return an error if CpfValidator returns false', async () => {
    const { sut, cpfValidatorSpy } = makeSut()
    cpfValidatorSpy.result = false
    const error = sut.validate({ cpf: 'any_cpf' })
    expect(error).toEqual(new InvalidParamError('cpf'))
  });
});