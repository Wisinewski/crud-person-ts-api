import { CpfValidatorAdapter } from './cpf-validator-adapter';
import { cpf } from 'cpf-cnpj-validator'

jest.spyOn(cpf, 'isValid').mockReturnValueOnce(true)

type SutTypes = {
  sut: CpfValidatorAdapter
}

const makeSut = (): SutTypes => {
  const sut = new CpfValidatorAdapter()
  return {
    sut
  }
}

describe('CpfValidatorAdapter', () => {
  test('should call cpf-cnpj-validator with correct value', () => {
    const { sut } = makeSut()
    const isCpfSpy = jest.spyOn(cpf, 'isValid')
    const input = 'any_cpf'
    sut.isValid(input)
    expect(isCpfSpy).toHaveBeenCalledWith(input)
  });
});