import { LoadPersonByFilterSpy } from './../../test/mock-person';
import { LoadPersonByFilterController } from './load-person-by-filter-controller';
import { HttpRequest } from './../../protocols/http';

const mockRequest = (): HttpRequest => ({
  query: {
    nome: 'any_nome',
    cpf: 'any_cpf',
    dataNascimento: 'any_dataNascimento',
    paisNascimento: 'any_paisNascimento',
    estadoNascimento: 'any_estadoNascimento',
    cidadeNascimento: 'any_cidadeNascimento'
  }
})

type SutTypes = {
  sut: LoadPersonByFilterController
  loadPersonByFilterSpy: LoadPersonByFilterSpy
}

const makeSut = (): SutTypes => {
  const loadPersonByFilterSpy = new LoadPersonByFilterSpy()
  const sut = new LoadPersonByFilterController(loadPersonByFilterSpy)
  return {
    sut,
    loadPersonByFilterSpy
  }
}

describe('LoadPersonByFilterController', () => {
  test('should call LoadPersonByFilter with correct values', async () => {
    const { sut, loadPersonByFilterSpy } = makeSut()
    const httpRequest = mockRequest()
    await sut.handle(httpRequest)
    expect(loadPersonByFilterSpy.params).toEqual(httpRequest.query)
  });
});