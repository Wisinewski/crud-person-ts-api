import { LoadPersonByFilterRepositorySpy } from './../../test/mock-db-person';
import { DbLoadPersonByFilter } from './db-load-person-by-filter';
import { mockFilterPersonParams } from './../../../domain/test/mock-person';

type SutTypes = {
  sut: DbLoadPersonByFilter
  loadPersonByFilterRepositorySpy: LoadPersonByFilterRepositorySpy
}

const makeSut = (): SutTypes => {
  const loadPersonByFilterRepositorySpy = new LoadPersonByFilterRepositorySpy()
  const sut = new DbLoadPersonByFilter(loadPersonByFilterRepositorySpy)
  return {
    sut,
    loadPersonByFilterRepositorySpy
  }
}

describe('DbLoadPersonByFilter', () => {
  test('should call LoadPersonByFilterRepository with correct values', async () => {
    const { sut, loadPersonByFilterRepositorySpy } = makeSut()
    const filterParams = mockFilterPersonParams()
    await sut.load(filterParams)
    expect(loadPersonByFilterRepositorySpy.params).toEqual(filterParams)
  });
});