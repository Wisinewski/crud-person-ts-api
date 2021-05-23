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
});