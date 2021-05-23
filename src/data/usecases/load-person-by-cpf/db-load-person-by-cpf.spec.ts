import { throwError } from './../../../domain/test/test-helper';
import { DbLoadPersonByCpf } from './db-load-person-by-cpf';
import { LoadPersonByCpfRepositorySpy } from './../../test/mock-db-person';

type SutTypes = {
  sut: DbLoadPersonByCpf
  loadPersonByCpfRepositorySpy: LoadPersonByCpfRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadPersonByCpfRepositorySpy = new LoadPersonByCpfRepositorySpy()
  const sut = new DbLoadPersonByCpf(loadPersonByCpfRepositorySpy)
  return {
    sut,
    loadPersonByCpfRepositorySpy
  }
}

describe('DbLoadPersonByCpf', () => {
  test('should call LoadPersonByCpfRepository with correct value', async () => {
    const { sut, loadPersonByCpfRepositorySpy } = makeSut()
    const cpf = 'any_cpf'
    await sut.load(cpf)
    expect(loadPersonByCpfRepositorySpy.cpf).toBe(cpf)
  });

  test('should throw if LoadPersonByCpfRepository throws', async () => {
    const { sut, loadPersonByCpfRepositorySpy } = makeSut()
    jest.spyOn(loadPersonByCpfRepositorySpy, 'loadByCpf').mockImplementationOnce(throwError)
    const promise = sut.load('any_cpf')
    expect(promise).rejects.toThrow()
  });

  test('should return null if LoadPersonByCpfRepository returns null', async () => {
    const { sut, loadPersonByCpfRepositorySpy } = makeSut()
    loadPersonByCpfRepositorySpy.result = null
    const person = await sut.load('any_cpf')
    expect(person).toBeNull()
  });
});